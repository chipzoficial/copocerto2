import Image from "next/image";
import Link from "next/link";
import { PlusIcon } from "@/components/icons";
import { Product } from "@/lib/types";
import { formatarMoeda } from "@/lib/utils";

export function ProductCard({ produto }: { produto: Product }) {
  return (
    <article className="min-w-[176px] max-w-[176px] overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_18px_42px_rgba(41,13,58,0.08)]">
      <Link href={`/produto/${produto.id}`} className="block">
        <div className="relative h-[148px] overflow-hidden bg-[linear-gradient(180deg,#f7edf7_0%,#efe0f3_100%)]">
          <div className="absolute inset-x-0 bottom-0 h-10 bg-[linear-gradient(180deg,transparent,rgba(66,18,86,0.08))]" />
          <Image src={produto.imagem} alt={produto.nome} fill className="object-cover scale-[1.02]" />
        </div>
      </Link>
      <div className="space-y-2 px-3 pb-3 pt-3">
        <Link href={`/produto/${produto.id}`} className="block">
          <span className="rounded-full bg-[rgba(95,28,129,0.08)] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[var(--surface-accent)]">
            {produto.tags[0] ?? "Destaque"}
          </span>
          <h3 className="line-clamp-1 text-[1rem] font-extrabold tracking-tight text-[var(--ink-strong)]">
            {produto.nome}
          </h3>
          <p className="mt-1 line-clamp-2 min-h-[2.5rem] text-[0.84rem] leading-5 text-[var(--ink-base)]">
            {produto.descricao}
          </p>
        </Link>
        <div className="flex items-end justify-between gap-3 pt-1">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--ink-muted)]">A partir de</p>
            <strong className="text-[1.85rem] font-extrabold leading-none text-[var(--surface-accent)]">
              {formatarMoeda(produto.precoBase)}
            </strong>
          </div>
          <Link
            href={`/produto/${produto.id}`}
            className="flex size-12 shrink-0 items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,#6e258d_0%,#4d1267_100%)] text-white shadow-[0_12px_28px_rgba(95,28,129,0.24)]"
          >
            <PlusIcon size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}
