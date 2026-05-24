"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Addon, CartItem, DeliveryMode, ProductSize } from "@/lib/types";

type AddPayload = {
  produtoId: string;
  nome: string;
  imagem: string;
  tamanho: ProductSize;
  complementos: Addon[];
  observacoes: string;
  quantidade: number;
  precoUnitario: number;
};

type CartContextValue = {
  itens: CartItem[];
  modoEntrega: DeliveryMode;
  cupom: string;
  pedidoConfirmado: string | null;
  setModoEntrega: (modo: DeliveryMode) => void;
  setCupom: (cupom: string) => void;
  adicionarItem: (payload: AddPayload) => void;
  atualizarQuantidade: (id: string, quantidade: number) => void;
  removerItem: (id: string) => void;
  limparCarrinho: () => void;
  registrarPedido: (numero: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "copocerto-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<CartItem[]>([]);
  const [modoEntrega, setModoEntrega] = useState<DeliveryMode>("Entrega");
  const [cupom, setCupom] = useState("");
  const [pedidoConfirmado, setPedidoConfirmado] = useState<string | null>(null);

  useEffect(() => {
    const snapshot = localStorage.getItem(STORAGE_KEY);
    if (!snapshot) return;

    try {
      const data = JSON.parse(snapshot) as {
        itens: CartItem[];
        modoEntrega: DeliveryMode;
        cupom: string;
        pedidoConfirmado: string | null;
      };
      setItens(data.itens ?? []);
      setModoEntrega(data.modoEntrega ?? "Entrega");
      setCupom(data.cupom ?? "");
      setPedidoConfirmado(data.pedidoConfirmado ?? null);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ itens, modoEntrega, cupom, pedidoConfirmado }),
    );
  }, [itens, modoEntrega, cupom, pedidoConfirmado]);

  const value = useMemo<CartContextValue>(
    () => ({
      itens,
      modoEntrega,
      cupom,
      pedidoConfirmado,
      setModoEntrega,
      setCupom,
      adicionarItem(payload) {
        setItens((atual) => [
          ...atual,
          {
            id: `${payload.produtoId}-${Date.now()}`,
            ...payload,
          },
        ]);
      },
      atualizarQuantidade(id, quantidade) {
        setItens((atual) =>
          atual
            .map((item) =>
              item.id === id ? { ...item, quantidade: Math.max(1, quantidade) } : item,
            )
            .filter((item) => item.quantidade > 0),
        );
      },
      removerItem(id) {
        setItens((atual) => atual.filter((item) => item.id !== id));
      },
      limparCarrinho() {
        setItens([]);
        setCupom("");
      },
      registrarPedido(numero) {
        setPedidoConfirmado(numero);
      },
    }),
    [cupom, itens, modoEntrega, pedidoConfirmado],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de CartProvider");
  }
  return context;
}
