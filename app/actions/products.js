"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function paraTela(p) {
  return {
    id: Number(p.id),
    nome: p.name,
    codigo: p.barcode,
    categoria: p.category,
    marca: p.brand || "",
    custo: p.costPrice.toNumber(),
    preco: p.salePrice.toNumber(),
    estoque: p.stock,
    estoqueMin: p.minStock,
  };
}

export async function criarProduto(dados) {
  const codigo = dados.codigo || `789${Math.floor(1000000 + Math.random() * 8999999)}`;
  const produto = await prisma.product.create({
    data: {
      name: dados.nome,
      barcode: codigo,
      category: dados.categoria,
      brand: dados.marca || null,
      costPrice: dados.custo,
      salePrice: dados.preco,
      stock: dados.estoque,
      minStock: dados.estoqueMin,
    },
  });
  revalidatePath("/");
  return paraTela(produto);
}

export async function editarProduto(id, dados) {
  const produto = await prisma.product.update({
    where: { id: BigInt(id) },
    data: {
      name: dados.nome,
      barcode: dados.codigo,
      category: dados.categoria,
      brand: dados.marca || null,
      costPrice: dados.custo,
      salePrice: dados.preco,
      stock: dados.estoque,
      minStock: dados.estoqueMin,
    },
  });
  revalidatePath("/");
  return paraTela(produto);
}

export async function apagarProduto(id) {
  await prisma.product.delete({ where: { id: BigInt(id) } });
  revalidatePath("/");
}

export async function ajustarEstoque(id, novoSaldo, motivo) {
  const atual = await prisma.product.findUnique({ where: { id: BigInt(id) } });
  await prisma.stockAdjustment.create({
    data: {
      productId: BigInt(id),
      previousStock: atual.stock,
      newStock: novoSaldo,
      reason: motivo || null,
    },
  });
  const produto = await prisma.product.update({
    where: { id: BigInt(id) },
    data: { stock: novoSaldo },
  });
  revalidatePath("/");
  return paraTela(produto);
}