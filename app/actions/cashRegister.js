"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function dataHoraBR(date) {
  return {
    data: date.toLocaleDateString("en-CA", { timeZone: "America/Sao_Paulo" }),
    hora: date.toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit" }),
  };
}

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
    hora: dataHoraBR(s.createdAt).hora,
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