"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function paraTela(c) {
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

export async function registrarRecebimento(accountId, valor, forma) {
  const atualizado = await prisma.$transaction(async (tx) => {
    const conta = await tx.crediarioAccount.findUnique({ where: { id: BigInt(accountId) } });
    const v = Math.min(valor, conta.balance.toNumber());
    await tx.crediarioPayment.create({
      data: { accountId: conta.id, amount: v, paymentMethod: forma },
    });
    const novoPago = conta.paidAmount.toNumber() + v;
    const novoSaldo = conta.balance.toNumber() - v;
    return tx.crediarioAccount.update({
      where: { id: conta.id },
      data: {
        paidAmount: novoPago,
        balance: novoSaldo,
        status: novoSaldo <= 0.001 ? "Paga" : "Pendente",
      },
      include: { payments: true },
    });
  });
  revalidatePath("/");
  return paraTela(atualizado);
}

export async function editarValorPromissoria(accountId, novoTotal) {
  const conta = await prisma.crediarioAccount.findUnique({ where: { id: BigInt(accountId) } });
  const novoSaldo = Math.max(0, novoTotal - conta.paidAmount.toNumber());
  const atualizado = await prisma.crediarioAccount.update({
    where: { id: conta.id },
    data: {
      totalAmount: novoTotal,
      balance: novoSaldo,
      status: novoSaldo <= 0.001 ? "Paga" : "Pendente",
    },
    include: { payments: true },
  });
  revalidatePath("/");
  return paraTela(atualizado);
}

export async function apagarPromissoria(accountId) {
  await prisma.$transaction(async (tx) => {
    await tx.crediarioPayment.deleteMany({ where: { accountId: BigInt(accountId) } });
    await tx.crediarioAccount.delete({ where: { id: BigInt(accountId) } });
  });
  revalidatePath("/");
}