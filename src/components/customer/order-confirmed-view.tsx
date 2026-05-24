"use client";

import Link from "next/link";
import { useCart } from "@/components/providers/cart-provider";

export function OrderConfirmedView() {
  const { pedidoConfirmado } = useCart();

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[linear-gradient(180deg,#3b0e50_0%,#250730_54%,#fffdfa_54%,#fffdfa_100%)] px-5 pb-10 pt-10">
      <div className="text-center text-white">
        <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-[rgba(183,229,51,0.16)] text-5xl">
          ✓
        </div>
        <p className="mt-6 text-sm uppercase tracking-[0.24em] text-white/66">Pedido recebido</p>
        <h1 className="mt-3 text-[2.15rem] font-extrabold leading-tight">
          Seu açaí já entrou na fila de preparo.
        </h1>
      </div>

      <section className="rounded-[34px] bg-white px-5 py-6 shadow-[0_26px_70px_rgba(39,9,56,0.18)]">
        <div className="rounded-[26px] bg-[var(--surface-soft)] px-4 py-4">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
            Número do pedido
          </p>
          <p className="mt-2 text-[2rem] font-extrabold text-[var(--surface-accent)]">
            {pedidoConfirmado ?? "CP1024"}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-[var(--ink-muted)]">Status inicial</p>
              <strong className="text-[var(--ink-strong)]">Recebido</strong>
            </div>
            <div>
              <p className="text-[var(--ink-muted)]">Previsão</p>
              <strong className="text-[var(--ink-strong)]">30 - 45 min</strong>
            </div>
          </div>
        </div>
        <p className="mt-5 text-sm leading-6 text-[var(--ink-base)]">
          Enviaremos as próximas atualizações para seu WhatsApp e exibiremos o andamento aqui.
        </p>
        <div className="mt-6 space-y-3">
          <Link
            href="/admin/pedidos"
            className="flex w-full items-center justify-center rounded-[22px] bg-[var(--cta)] px-5 py-4 text-lg font-extrabold text-[#2d2b14]"
          >
            Acompanhar pedido
          </Link>
          <Link
            href="/"
            className="flex w-full items-center justify-center rounded-[22px] border border-[var(--line-soft)] px-5 py-4 font-extrabold text-[var(--surface-accent)]"
          >
            Voltar ao início
          </Link>
        </div>
      </section>
    </div>
  );
}
