"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function abrirCaixa(valorInicial) {
  const caixa = await prisma.cashRegister.create({
    data: { openingAmount: valorInicial, status: "aberto" },
  });
  revalidatePath("/");
  return {
    id: Number(caixa.id),
    aberto: true,
    valorInicial: caixa.openingAmount.toNumber(),
    sangrias: [],
  };
}

export async function registrarSangria(cashRegisterId, valor, motivo) {
  const s = await prisma.cashWithdrawal.create({
    data: { cashRegisterId: BigInt(cashRegisterId), amount: valor, reason: motivo || null },
  });
  revalidatePath("/");
  return {
    hora: s.createdAt.toISOString().slice(11, 16),
    valor: s.amount.toNumber(),
    motivo: s.reason || "",
  };
}

export async function fecharCaixa(cashRegisterId) {
  await prisma.cashRegister.update({
    where: { id: BigInt(cashRegisterId) },
    data: { status: "fechado", closedAt: new Date() },
  });
  revalidatePath("/");
}