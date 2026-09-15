"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function paraTela(c) {
  return {
    id: Number(c.id),
    nome: c.name,
    telefone: c.phone || "",
    cidade: c.city || "",
    ultimaCompra: c.lastPurchaseAt ? c.lastPurchaseAt.toISOString().slice(0, 10) : "",
    valorGasto: c.totalSpent.toNumber(),
  };
}

export async function criarCliente(dados) {
  const cliente = await prisma.customer.create({
    data: {
      name: dados.nome,
      phone: dados.telefone || null,
      city: dados.cidade || null,
      lastPurchaseAt: dados.ultimaCompra ? new Date(dados.ultimaCompra) : null,
      totalSpent: dados.valorGasto || 0,
    },
  });
  revalidatePath("/");
  return paraTela(cliente);
}

export async function editarCliente(id, dados) {
  const cliente = await prisma.customer.update({
    where: { id: BigInt(id) },
    data: {
      name: dados.nome,
      phone: dados.telefone || null,
      city: dados.cidade || null,
      lastPurchaseAt: dados.ultimaCompra ? new Date(dados.ultimaCompra) : null,
      totalSpent: dados.valorGasto || 0,
    },
  });
  revalidatePath("/");
  return paraTela(cliente);
}

export async function apagarCliente(id) {
  await prisma.customer.delete({ where: { id: BigInt(id) } });
  revalidatePath("/");
}