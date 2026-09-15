"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function paraTela(s) {
  return {
    id: Number(s.id),
    razaoSocial: s.legalName,
    fantasia: s.tradeName || "",
    cnpj: s.cnpj || "",
    responsavel: s.contactName || "",
  };
}

export async function criarFornecedor(dados) {
  const fornecedor = await prisma.supplier.create({
    data: {
      legalName: dados.razaoSocial,
      tradeName: dados.fantasia || null,
      cnpj: dados.cnpj || null,
      contactName: dados.responsavel || null,
    },
  });
  revalidatePath("/");
  return paraTela(fornecedor);
}

export async function apagarFornecedor(id) {
  await prisma.supplier.delete({ where: { id: BigInt(id) } });
  revalidatePath("/");
}