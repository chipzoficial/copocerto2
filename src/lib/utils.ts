import { Addon, CartItem, DeliveryMode, OrderStatus, Product } from "@/lib/types";

export function formatarMoeda(valor: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

export function calcularPrecoItem(
  tamanho: { preco: number },
  complementos: Addon[],
  quantidade: number,
) {
  const adicionais = complementos.reduce((total, item) => total + item.preco, 0);
  return (tamanho.preco + adicionais) * quantidade;
}

export function subtotalCarrinho(itens: CartItem[]) {
  return itens.reduce((total, item) => total + item.precoUnitario * item.quantidade, 0);
}

export function totalComplementos(product: Product, addons: Addon[]) {
  return addons.filter((addon) => product.complementosPermitidos.includes(addon.id)).length;
}

export function corStatus(status: OrderStatus) {
  switch (status) {
    case "Recebido":
      return "bg-amber-100 text-amber-700";
    case "Em preparo":
      return "bg-fuchsia-100 text-fuchsia-700";
    case "Saiu para entrega":
      return "bg-sky-100 text-sky-700";
    case "Pronto para retirada":
      return "bg-violet-100 text-violet-700";
    case "Finalizado":
      return "bg-emerald-100 text-emerald-700";
    default:
      return "bg-rose-100 text-rose-700";
  }
}

export function taxaEntrega(modo: DeliveryMode) {
  return modo === "Entrega" ? 6 : 0;
}
