"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function paraTelaVenda(s) {
  return {
    id: Number(s.id),
    data: s.createdAt.toISOString().slice(0, 10),
    hora: s.createdAt.toISOString().slice(11, 16),
    cliente: s.customerNameFree || "",
    itens: s.items.map((i) => ({
      produtoId: Number(i.productId),
      nome: i.product.name,
      qtd: i.quantity,
      preco: i.unitPrice.toNumber(),
    })),
    desconto: s.discount.toNumber(),
    acrescimo: s.surcharge.toNumber(),
    total: s.total.toNumber(),
    pagamento: s.paymentMethod,
    entradaCrediario: s.downPayment !== null ? s.downPayment.toNumber() : undefined,
  };
}

function paraTelaCrediario(c) {
  return {
    id: Number(c.id),
    vendaId: Number(c.saleId),
    clienteNome: c.customerNameFree || "",
    valorTotal: c.totalAmount.toNumber(),
    valorPago: c.paidAmount.toNumber(),
    saldo: c.balance.toNumber(),
    status: c.status,
    prazoDias: c.termDays,
    parcelas: c.installments,
    vencimento: c.dueDate ? c.dueDate.toISOString().slice(0, 10) : null,
    recebimentos: (c.payments || []).map((p) => ({
      data: p.paidAt.toISOString().slice(0, 10),
      hora: p.paidAt.toISOString().slice(11, 16),
      valor: p.amount.toNumber(),
      forma: p.paymentMethod,
    })),
  };
}

// dados: { itens, clienteNome, desconto, acrescimo, total, pagamento, cashRegisterId, entradaCrediario, prazoDias, parcelas }
export async function finalizarVenda(dados) {
  const { venda, contaCrediario } = await prisma.$transaction(async (tx) => {
    let customerId = null;
    if (dados.clienteNome) {
      const existente = await tx.customer.findFirst({
        where: { name: { equals: dados.clienteNome, mode: "insensitive" } },
      });
      if (existente) {
        customerId = existente.id;
        await tx.customer.update({
          where: { id: existente.id },
          data: {
            lastPurchaseAt: new Date(),
            totalSpent: existente.totalSpent.toNumber() + dados.total,
          },
        });
      }
    }

    const novaVenda = await tx.sale.create({
      data: {
        customerId,
        customerNameFree: dados.clienteNome || null,
        cashRegisterId: dados.cashRegisterId ? BigInt(dados.cashRegisterId) : null,
        discount: dados.desconto || 0,
        surcharge: dados.acrescimo || 0,
        total: dados.total,
        paymentMethod: dados.pagamento,
        downPayment: dados.pagamento === "Crediário" ? (dados.entradaCrediario || 0) : null,
        items: {
          create: dados.itens.map((i) => ({
            productId: BigInt(i.produtoId),
            quantity: i.qtd,
            unitPrice: i.preco,
          })),
        },
      },
      include: { items: { include: { product: true } } },
    });

    for (const item of dados.itens) {
      await tx.product.update({
        where: { id: BigInt(item.produtoId) },
        data: { stock: { decrement: item.qtd } },
      });
    }

    let contaCrediario = null;
    if (dados.pagamento === "Crediário") {
      const saldo = dados.total - (dados.entradaCrediario || 0);
      if (saldo > 0) {
        const vencimento = new Date();
        vencimento.setDate(vencimento.getDate() + (dados.prazoDias || 30));
        contaCrediario = await tx.crediarioAccount.create({
          data: {
            saleId: novaVenda.id,
            customerId,
            customerNameFree: dados.clienteNome || "Cliente balcão",
            totalAmount: dados.total,
            paidAmount: dados.entradaCrediario || 0,
            balance: saldo,
            status: "Pendente",
            termDays: dados.prazoDias || 30,
            installments: dados.parcelas || 1,
            dueDate: vencimento,
            payments: dados.entradaCrediario > 0
              ? { create: [{ amount: dados.entradaCrediario, paymentMethod: "Entrada" }] }
              : undefined,
          },
          include: { payments: true },
        });
      }
    }

    return { venda: novaVenda, contaCrediario };
  });

  revalidatePath("/");
  return {
    venda: paraTelaVenda(venda),
    crediario: contaCrediario ? paraTelaCrediario(contaCrediario) : null,
  };
}

export async function excluirVenda(saleId) {
  await prisma.$transaction(async (tx) => {
    const venda = await tx.sale.findUnique({
      where: { id: BigInt(saleId) },
      include: { items: true, crediarioAccount: true },
    });
    if (!venda) return;

    for (const item of venda.items) {
      await tx.product.update({
        where: { id: item.productId },
        data: { stock: { increment: item.quantity } },
      });
    }

    if (venda.crediarioAccount) {
      await tx.crediarioPayment.deleteMany({ where: { accountId: venda.crediarioAccount.id } });
      await tx.crediarioAccount.delete({ where: { id: venda.crediarioAccount.id } });
    }

    await tx.saleItem.deleteMany({ where: { saleId: venda.id } });
    await tx.sale.delete({ where: { id: venda.id } });
  });
  revalidatePath("/");
}