"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, BagIcon, MinusIcon, PinIcon, PlusIcon, TrashIcon } from "@/components/icons";
import { useCart } from "@/components/providers/cart-provider";
import { formatarMoeda, subtotalCarrinho, taxaEntrega } from "@/lib/utils";

export function CartView() {
  const { itens, modoEntrega, setModoEntrega, cupom, setCupom, atualizarQuantidade, removerItem } =
    useCart();

  const subtotal = subtotalCarrinho(itens);
  const entrega = taxaEntrega(modoEntrega);
  const total = subtotal + entrega;

  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <header className="glow-header px-5 pb-7 pt-5 text-white">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/" className="flex size-11 items-center justify-center rounded-full bg-white/10">
            <ArrowLeftIcon size={18} />
          </Link>
          <h1 className="text-xl font-extrabold">Meu carrinho</h1>
          <button className="flex size-11 items-center justify-center rounded-full bg-white/10">
            <TrashIcon size={18} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 rounded-[28px] bg-white px-4 py-4 text-[var(--ink-strong)] shadow-[0_18px_40px_rgba(40,9,55,0.14)]">
          <div className="flex gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-[rgba(95,28,129,0.08)] text-[var(--surface-accent)]">
              <BagIcon size={18} />
            </div>
            <div>
              <p className="text-sm text-[var(--ink-base)]">Entrega estimada</p>
              <strong className="font-extrabold">30 - 45 min</strong>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-[rgba(95,28,129,0.08)] text-[var(--surface-accent)]">
              <PinIcon size={18} />
            </div>
            <div>
              <p className="text-sm text-[var(--ink-base)]">Entregar em</p>
              <strong className="font-extrabold">Rua das Acácias, 123</strong>
            </div>
          </div>
        </div>
      </header>

      <section className="-mt-6 rounded-t-[34px] bg-[var(--surface)] px-5 pb-10 pt-6">
        {itens.length === 0 ? (
          <div className="rounded-[28px] bg-[var(--surface-soft)] px-5 py-8 text-center">
            <h2 className="text-xl font-extrabold text-[var(--ink-strong)]">Seu carrinho está vazio</h2>
            <p className="mt-2 text-sm text-[var(--ink-base)]">
              Escolha um açaí especial e volte aqui para finalizar.
            </p>
            <Link
              href="/"
              className="mt-5 inline-flex rounded-full bg-[var(--surface-accent)] px-5 py-3 font-extrabold text-white"
            >
              Ver cardápio
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {itens.map((item) => (
              <article
                key={item.id}
                className="flex gap-3 rounded-[26px] border border-[var(--line-soft)] bg-white px-3 py-3 shadow-[0_14px_32px_rgba(41,13,58,0.05)]"
              >
                <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-[20px] bg-[var(--surface-soft)]">
                  <Image src={item.imagem} alt={item.nome} fill className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-extrabold text-[var(--ink-strong)]">{item.nome}</h2>
                      <p className="text-sm text-[var(--ink-base)]">{item.tamanho.nome}</p>
                      <p className="mt-1 text-sm text-[var(--ink-base)]">
                        {item.complementos.map((addon) => addon.nome).join(", ")}
                      </p>
                    </div>
                    <button
                      onClick={() => removerItem(item.id)}
                      className="text-[var(--ink-muted)]"
                    >
                      <TrashIcon size={18} />
                    </button>
                  </div>
                  <div className="mt-3 flex items-end justify-between">
                    <strong className="text-2xl font-extrabold text-[var(--surface-accent)]">
                      {formatarMoeda(item.precoUnitario * item.quantidade)}
                    </strong>
                    <div className="flex items-center gap-2 rounded-full border border-[var(--line-soft)] px-2 py-2">
                      <button
                        onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}
                        className="flex size-8 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--surface-accent)]"
                      >
                        <MinusIcon size={14} />
                      </button>
                      <strong className="w-5 text-center font-extrabold">{item.quantidade}</strong>
                      <button
                        onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                        className="flex size-8 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--surface-accent)]"
                      >
                        <PlusIcon size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-6 space-y-4">
          <div className="flex gap-3">
            <input
              value={cupom}
              onChange={(event) => setCupom(event.target.value)}
              placeholder="Adicionar cupom de desconto"
              className="h-14 flex-1 rounded-[22px] border border-[var(--line-soft)] bg-white px-4 text-sm outline-none placeholder:text-[var(--ink-muted)]"
            />
            <button className="rounded-[22px] bg-[var(--surface-accent)] px-5 text-sm font-extrabold text-white">
              Aplicar
            </button>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-extrabold text-[var(--ink-strong)]">Entrega ou retirada</h3>
            <div className="grid grid-cols-2 gap-3">
              {(["Entrega", "Retirada"] as const).map((modo) => {
                const ativo = modo === modoEntrega;
                return (
                  <button
                    key={modo}
                    onClick={() => setModoEntrega(modo)}
                    className={`rounded-[24px] border px-4 py-4 text-left transition ${
                      ativo
                        ? "border-transparent bg-[linear-gradient(135deg,#57146d_0%,#2e083c_100%)] text-white shadow-[0_18px_35px_rgba(95,28,129,0.24)]"
                        : "border-[var(--line-soft)] bg-white text-[var(--ink-strong)]"
                    }`}
                  >
                    <p className="text-lg font-extrabold">{modo}</p>
                    <p className={`mt-1 text-sm leading-5 ${ativo ? "text-white/80" : "text-[var(--ink-base)]"}`}>
                      {modo === "Entrega"
                        ? "Receba no conforto da sua casa"
                        : "Retire em nossa loja e economize"}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[28px] bg-[var(--surface-soft)] px-4 py-4">
            <h3 className="text-xl font-extrabold text-[var(--ink-strong)]">Resumo do pedido</h3>
            <div className="mt-4 space-y-2 text-sm text-[var(--ink-base)]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatarMoeda(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxa de entrega</span>
                <span>{formatarMoeda(entrega)}</span>
              </div>
            </div>
            <div className="mt-4 flex items-end justify-between border-t border-[var(--line-soft)] pt-4">
              <span className="text-lg font-extrabold text-[var(--ink-strong)]">Total</span>
              <strong className="text-[2rem] font-extrabold text-[var(--surface-accent)]">
                {formatarMoeda(total)}
              </strong>
            </div>
          </div>
        </div>

        <Link
          href="/checkout"
          className="mt-6 flex w-full items-center justify-center rounded-[24px] bg-[var(--cta)] px-5 py-4 text-lg font-extrabold text-[#2d2b14] shadow-[0_20px_36px_rgba(183,229,51,0.28)]"
        >
          Finalizar pedido
        </Link>
      </section>
    </div>
  );
}
