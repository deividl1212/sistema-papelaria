import { prisma } from "@/lib/prisma";
import AppShell from "./AppShell";

function dataHoraBR(date) {
  return {
    data: date.toLocaleDateString("en-CA", { timeZone: "America/Sao_Paulo" }),
    hora: date.toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit" }),
  };
}

export default async function Page() {
  const [
    produtosDoBanco,
    clientesDoBanco,
    fornecedoresDoBanco,
    contasDoBanco,
    vendasDoBanco,
    crediarioDoBanco,
    caixaAberto,
  ] = await Promise.all([
    prisma.product.findMany({ orderBy: { id: "asc" } }),
    prisma.customer.findMany({ orderBy: { id: "asc" } }),
    prisma.supplier.findMany({ orderBy: { id: "asc" } }),
    prisma.payable.findMany({ orderBy: { id: "asc" } }),
    prisma.sale.findMany({
      orderBy: { id: "desc" },
      include: { items: { include: { product: true } } },
    }),
    prisma.crediarioAccount.findMany({
      orderBy: { id: "asc" },
      include: { payments: true },
    }),
    prisma.cashRegister.findFirst({
      where: { status: "aberto" },
      include: { withdrawals: true },
    }),
  ]);

  const initialProducts = produtosDoBanco.map((p) => ({
    id: Number(p.id),
    nome: p.name,
    codigo: p.barcode,
    categoria: p.category,
    marca: p.brand || "",
    custo: p.costPrice.toNumber(),
    preco: p.salePrice.toNumber(),
    estoque: p.stock,
    estoqueMin: p.minStock,
  }));

  const initialCustomers = clientesDoBanco.map((c) => ({
    id: Number(c.id),
    nome: c.name,
    telefone: c.phone || "",
    cidade: c.city || "",
    ultimaCompra: c.lastPurchaseAt ? c.lastPurchaseAt.toISOString().slice(0, 10) : "",
    valorGasto: c.totalSpent.toNumber(),
  }));

  const initialSuppliers = fornecedoresDoBanco.map((s) => ({
    id: Number(s.id),
    razaoSocial: s.legalName,
    fantasia: s.tradeName || "",
    cnpj: s.cnpj || "",
    responsavel: s.contactName || "",
  }));

  const initialPayables = contasDoBanco.map((p) => ({
    id: Number(p.id),
    fornecedor: p.supplierNameFree || "",
    categoria: p.category,
    valor: p.amount.toNumber(),
    descricao: p.description || "",
    pagamento: p.paymentMethod,
    vencimento: p.dueDate.toISOString().slice(0, 10),
    nf: p.invoiceNumber || "",
    status: p.status,
  }));

  const initialSales = vendasDoBanco.map((s) => ({
    id: Number(s.id),
    ...dataHoraBR(s.createdAt),
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
  }));

  const initialCrediario = crediarioDoBanco.map((c) => ({
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
    recebimentos: c.payments.map((p) => ({
      ...dataHoraBR(p.paidAt),
      valor: p.amount.toNumber(),
      forma: p.paymentMethod,
    })),
  }));

  const initialCaixa = caixaAberto
    ? {
        id: Number(caixaAberto.id),
        aberto: true,
        valorInicial: caixaAberto.openingAmount.toNumber(),
        sangrias: caixaAberto.withdrawals.map((w) => ({
          hora: dataHoraBR(w.createdAt).hora,
          valor: w.amount.toNumber(),
          motivo: w.reason || "",
        })),
      }
    : { aberto: false, valorInicial: 0, sangrias: [] };

  return (
    <AppShell
      initialProducts={initialProducts}
      initialCustomers={initialCustomers}
      initialSuppliers={initialSuppliers}
      initialPayables={initialPayables}
      initialSales={initialSales}
      initialCrediario={initialCrediario}
      initialCaixa={initialCaixa}
    />
  );
}