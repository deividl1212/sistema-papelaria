"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function paraTela(p) {
  return {
    id: Number(p.id),
    fornecedor: p.supplierNameFree || "",
    categoria: p.category,
    valor: p.amount.toNumber(),
    descricao: p.description || "",
    pagamento: p.paymentMethod,
    vencimento: p.dueDate.toISOString().slice(0, 10),
    nf: p.invoiceNumber || "",
    status: p.status,
  };
}

export async function criarConta(dados) {
  const conta = await prisma.payable.create({
    data: {
      supplierNameFree: dados.fornecedor,
      category: dados.categoria,
      amount: dados.valor,
      description: dados.descricao || null,
      paymentMethod: dados.pagamento,
      dueDate: new Date(dados.vencimento),
      invoiceNumber: dados.nf || null,
      status: "Pendente",
    },
  });
  revalidatePath("/");
  return paraTela(conta);
}

export async function editarConta(id, dados) {
  const conta = await prisma.payable.update({
    where: { id: BigInt(id) },
    data: {
      supplierNameFree: dados.fornecedor,
      category: dados.categoria,
      amount: dados.valor,
      description: dados.descricao || null,
      paymentMethod: dados.pagamento,
      dueDate: new Date(dados.vencimento),
      invoiceNumber: dados.nf || null,
    },
  });
  revalidatePath("/");
  return paraTela(conta);
}

export async function alternarStatusConta(id, statusAtual) {
  const conta = await prisma.payable.update({
    where: { id: BigInt(id) },
    data: { status: statusAtual === "Pendente" ? "Pago" : "Pendente" },
  });
  revalidatePath("/");
  return paraTela(conta);
}

export async function apagarConta(id) {
  await prisma.payable.delete({ where: { id: BigInt(id) } });
  revalidatePath("/");
}