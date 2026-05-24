"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ArrowLeftIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
} from "@/components/icons";
import { useCart } from "@/components/providers/cart-provider";
import { Addon, Product } from "@/lib/types";
import { calcularPrecoItem, formatarMoeda } from "@/lib/utils";

export function ProductCustomizer({
  produto,
  addons,
}: {
  produto: Product;
  addons: Addon[];
}) {
  const router = useRouter();
  const { adicionarItem } = useCart();
  const [tamanhoId, setTamanhoId] = useState(produto.tamanhos[1]?.id ?? produto.tamanhos[0].id);
  const [selecionados, setSelecionados] = useState<Addon[]>(
    addons.filter((addon) => ["morango", "leite-em-po", "granola"].includes(addon.id)).slice(0, 3),
  );
  const [observacoes, setObservacoes] = useState("");
  const [quantidade, setQuantidade] = useState(1);

  const tamanhoSelecionado =
    produto.tamanhos.find((item) => item.id === tamanhoId) ?? produto.tamanhos[0];

  const total = calcularPrecoItem(tamanhoSelecionado, selecionados, quantidade);

  function alternarComplemento(addon: Addon) {
    setSelecionados((atual) =>
      atual.some((item) => item.id === addon.id)
        ? atual.filter((item) => item.id !== addon.id)
        : [...atual, addon],
    );
  }

  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <header className="glow-header px-5 pb-7 pt-5 text-white">
        <div className="mb-5 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex size-11 items-center justify-center rounded-full bg-white/10"
          >
            <ArrowLeftIcon size={18} />
          </button>
          <p className="text-base font-extrabold">Personalize seu açaí</p>
          <button className="flex size-11 items-center justify-center rounded-full bg-white/10">
            <HeartIcon size={18} />
          </button>
        </div>
        <div className="relative mx-auto h-[300px] w-full max-w-[320px] overflow-hidden rounded-[32px]">
          <Image src={produto.imagem} alt={produto.nome} fill className="object-cover" priority />
        </div>
      </header>

      <section className="-mt-6 rounded-t-[34px] bg-[var(--surface)] px-5 pb-36 pt-6">
        <div className="mb-6">
          <span className="rounded-full bg-[rgba(95,28,129,0.1)] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--surface-accent)]">
            {produto.destaque}
          </span>
          <h1 className="mt-3 text-[1.9rem] font-extrabold tracking-tight text-[var(--ink-strong)]">
            {produto.nome}
          </h1>
          <p className="mt-2 text-sm leading-6 text-[var(--ink-base)]">{produto.descricaoLonga}</p>
        </div>

        <div className="space-y-8">
          <div>
            <p className="mb-3 text-lg font-extrabold text-[var(--ink-strong)]">1. Escolha o tamanho</p>
            <div className="grid grid-cols-3 gap-3">
              {produto.tamanhos.map((tamanho) => {
                const ativo = tamanho.id === tamanhoSelecionado.id;
                return (
                  <button
                    key={tamanho.id}
                    onClick={() => setTamanhoId(tamanho.id)}
                    className={`rounded-[24px] border px-3 py-4 text-center transition ${
                      ativo
                        ? "border-transparent bg-[var(--surface-accent)] text-white shadow-[0_18px_35px_rgba(95,28,129,0.25)]"
                        : "border-[var(--line-soft)] bg-white text-[var(--ink-strong)]"
                    }`}
                  >
                    <p className="text-xl font-extrabold">{tamanho.volume}</p>
                    <p className={`mt-1 text-sm ${ativo ? "text-white/84" : "text-[var(--ink-base)]"}`}>
                      {formatarMoeda(tamanho.preco)}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="mb-3 text-lg font-extrabold text-[var(--ink-strong)]">
              2. Escolha os complementos
            </p>
            <div className="grid grid-cols-2 gap-3">
              {addons.map((addon) => {
                const ativo = selecionados.some((item) => item.id === addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => alternarComplemento(addon)}
                    className={`flex items-center justify-between rounded-[22px] border px-4 py-3 text-left transition ${
                      ativo
                        ? "border-[var(--surface-accent)] bg-[rgba(95,28,129,0.04)]"
                        : "border-[var(--line-soft)] bg-white"
                    }`}
                  >
                    <div>
                      <p className="font-bold text-[var(--ink-strong)]">{addon.nome}</p>
                      <p className="text-xs text-[var(--ink-base)]">
                        {addon.preco > 0 ? `+ ${formatarMoeda(addon.preco)}` : "Incluso"}
                      </p>
                    </div>
                    <span
                      className={`flex size-5 items-center justify-center rounded-md border text-xs ${
                        ativo
                          ? "border-[var(--surface-accent)] bg-[var(--surface-accent)] text-white"
                          : "border-[var(--line-soft)] text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="mb-3 text-lg font-extrabold text-[var(--ink-strong)]">3. Observações</p>
            <textarea
              value={observacoes}
              onChange={(event) => setObservacoes(event.target.value)}
              placeholder="Ex.: enviar bem gelado e com colher extra."
              className="min-h-28 w-full rounded-[24px] border border-[var(--line-soft)] bg-[var(--surface-soft)] px-4 py-4 text-sm text-[var(--ink-strong)] outline-none placeholder:text-[var(--ink-muted)]"
            />
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 mx-auto w-full max-w-[430px] border-t border-[var(--line-soft)] bg-white/96 px-5 pb-5 pt-4 backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-[var(--ink-base)]">
              {selecionados.length} itens selecionados
            </p>
            <button className="text-sm font-bold text-[var(--surface-accent)]">Detalhes</button>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-[var(--line-soft)] px-2 py-2">
            <button
              onClick={() => setQuantidade((atual) => Math.max(1, atual - 1))}
              className="flex size-9 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--surface-accent)]"
            >
              <MinusIcon size={16} />
            </button>
            <strong className="w-5 text-center text-base font-extrabold">{quantidade}</strong>
            <button
              onClick={() => setQuantidade((atual) => atual + 1)}
              className="flex size-9 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--surface-accent)]"
            >
              <PlusIcon size={16} />
            </button>
          </div>
        </div>
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-sm text-[var(--ink-base)]">Total parcial</p>
            <strong className="text-[2rem] font-extrabold tracking-tight text-[var(--surface-accent)]">
              {formatarMoeda(total)}
            </strong>
          </div>
        </div>
        <button
          onClick={() => {
            adicionarItem({
              produtoId: produto.id,
              nome: produto.nome,
              imagem: produto.imagem,
              tamanho: tamanhoSelecionado,
              complementos: selecionados,
              observacoes,
              quantidade,
              precoUnitario: total / quantidade,
            });
            router.push("/carrinho");
          }}
          className="flex w-full items-center justify-center gap-3 rounded-[24px] bg-[var(--cta)] px-5 py-4 text-lg font-extrabold text-[#2e2a14] shadow-[0_18px_36px_rgba(183,229,51,0.28)]"
        >
          Adicionar ao carrinho
          <PlusIcon size={18} />
        </button>
      </div>
    </div>
  );
}
