import Image from "next/image";
import Link from "next/link";
import { PlusIcon } from "@/components/icons";
import { Product } from "@/lib/types";
import { formatarMoeda } from "@/lib/utils";

export function ProductCard({ produto }: { produto: Product }) {
  return (
    <article className="min-w-[170px] max-w-[170px] overflow-hidden rounded-[24px] border border-[var(--line-soft)] bg-white shadow-[0_14px_32px_rgba(41,13,58,0.06)]">
      <Link href={`/produto/${produto.id}`} className="block">
        <div className="relative h-[136px] overflow-hidden bg-[var(--surface-soft)]">
          <Image src={produto.imagem} alt={produto.nome} fill className="object-cover" />
        </div>
      </Link>
      <div className="space-y-2 px-3 pb-3 pt-2">
        <Link href={`/produto/${produto.id}`} className="block">
          <h3 className="line-clamp-1 text-[1rem] font-extrabold tracking-tight text-[var(--ink-strong)]">
            {produto.nome}
          </h3>
          <p className="mt-1 line-clamp-2 text-[0.84rem] leading-5 text-[var(--ink-base)]">
            {produto.descricao}
          </p>
        </Link>
        <div className="flex items-end justify-between gap-3">
          <strong className="text-lg font-extrabold text-[var(--surface-accent)]">
            {formatarMoeda(produto.precoBase)}
          </strong>
          <Link
            href={`/produto/${produto.id}`}
            className="flex size-11 items-center justify-center rounded-2xl bg-[var(--surface-accent)] text-white shadow-[0_10px_24px_rgba(95,28,129,0.28)]"
          >
            <PlusIcon size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}
