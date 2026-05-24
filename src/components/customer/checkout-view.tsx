"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeftIcon } from "@/components/icons";
import { useCart } from "@/components/providers/cart-provider";
import { formatarMoeda, subtotalCarrinho, taxaEntrega } from "@/lib/utils";

export function CheckoutView() {
  const router = useRouter();
  const { itens, modoEntrega, registrarPedido, limparCarrinho } = useCart();
  const [nome, setNome] = useState("Marina Souza");
  const [telefone, setTelefone] = useState("(11) 99888-2233");
  const [endereco, setEndereco] = useState("Rua das Acácias, 123");
  const [pagamento, setPagamento] = useState("Pix");

  const subtotal = subtotalCarrinho(itens);
  const entrega = taxaEntrega(modoEntrega);
  const total = subtotal + entrega;

  function confirmarPedido() {
    const numero = `CP${Math.floor(1000 + Math.random() * 9000)}`;
    registrarPedido(numero);
    limparCarrinho();
    router.push("/pedido-confirmado");
  }

  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <header className="glow-header px-5 pb-8 pt-5 text-white">
        <div className="flex items-center justify-between">
          <Link href="/carrinho" className="flex size-11 items-center justify-center rounded-full bg-white/10">
            <ArrowLeftIcon size={18} />
          </Link>
          <h1 className="text-xl font-extrabold">Checkout</h1>
          <span className="w-11" />
        </div>
        <div className="mt-5">
          <p className="text-sm uppercase tracking-[0.24em] text-white/66">Última etapa</p>
          <h2 className="mt-2 text-[1.8rem] font-extrabold leading-tight">
            Confirme seus dados e finalize seu pedido.
          </h2>
        </div>
      </header>

      <section className="-mt-5 space-y-5 rounded-t-[34px] bg-[var(--surface)] px-5 pb-10 pt-6">
        <div className="space-y-4 rounded-[28px] bg-[var(--surface-soft)] px-4 py-4">
          <h3 className="text-xl font-extrabold text-[var(--ink-strong)]">Dados do cliente</h3>
          <input
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            className="h-13 w-full rounded-[18px] border border-[var(--line-soft)] bg-white px-4 outline-none"
            placeholder="Seu nome"
          />
          <input
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
            className="h-13 w-full rounded-[18px] border border-[var(--line-soft)] bg-white px-4 outline-none"
            placeholder="Telefone ou WhatsApp"
          />
        </div>

        <div className="space-y-4 rounded-[28px] bg-white px-4 py-4 shadow-[0_14px_32px_rgba(41,13,58,0.05)]">
          <h3 className="text-xl font-extrabold text-[var(--ink-strong)]">
            {modoEntrega === "Entrega" ? "Endereço de entrega" : "Dados para retirada"}
          </h3>
          <textarea
            value={endereco}
            onChange={(event) => setEndereco(event.target.value)}
            className="min-h-24 w-full rounded-[18px] border border-[var(--line-soft)] bg-[var(--surface-soft)] px-4 py-4 outline-none"
          />
          <div>
            <p className="mb-2 text-sm font-bold text-[var(--ink-base)]">Forma de pagamento</p>
            <div className="grid grid-cols-3 gap-2">
              {["Pix", "Crédito", "Dinheiro"].map((metodo) => (
                <button
                  key={metodo}
                  onClick={() => setPagamento(metodo)}
                  className={`rounded-[18px] px-3 py-3 text-sm font-extrabold ${
                    pagamento === metodo
                      ? "bg-[var(--surface-accent)] text-white"
                      : "bg-[var(--surface-soft)] text-[var(--ink-base)]"
                  }`}
                >
                  {metodo}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-[var(--line-soft)] bg-white px-4 py-4">
          <h3 className="text-xl font-extrabold text-[var(--ink-strong)]">Resumo final</h3>
          <div className="mt-4 space-y-3">
            {itens.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-3 text-sm">
                <div>
                  <p className="font-extrabold text-[var(--ink-strong)]">
                    {item.quantidade}x {item.nome}
                  </p>
                  <p className="text-[var(--ink-base)]">{item.tamanho.nome}</p>
                </div>
                <strong className="text-[var(--surface-accent)]">
                  {formatarMoeda(item.precoUnitario * item.quantidade)}
                </strong>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2 border-t border-[var(--line-soft)] pt-4 text-sm">
            <div className="flex justify-between text-[var(--ink-base)]">
              <span>Subtotal</span>
              <span>{formatarMoeda(subtotal)}</span>
            </div>
            <div className="flex justify-between text-[var(--ink-base)]">
              <span>Taxa de entrega</span>
              <span>{formatarMoeda(entrega)}</span>
            </div>
            <div className="flex justify-between text-lg font-extrabold text-[var(--ink-strong)]">
              <span>Total</span>
              <span className="text-[var(--surface-accent)]">{formatarMoeda(total)}</span>
            </div>
          </div>
        </div>

        <button
          onClick={confirmarPedido}
          className="flex w-full items-center justify-center rounded-[24px] bg-[var(--cta)] px-5 py-4 text-lg font-extrabold text-[#2d2a14] shadow-[0_18px_36px_rgba(183,229,51,0.28)]"
        >
          Confirmar pedido
        </button>
      </section>
    </div>
  );
}
