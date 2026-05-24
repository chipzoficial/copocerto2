import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { formatarMoeda } from "@/lib/utils";

export function ComboHighlight({ produto }: { produto: Product }) {
  return (
    <Link
      href={`/produto/${produto.id}`}
      className="flex items-center gap-3 rounded-[28px] bg-[linear-gradient(135deg,#f3e4f8_0%,#eadcf4_100%)] px-3 py-3"
    >
      <div className="relative h-24 w-28 overflow-hidden rounded-[22px]">
        <Image src={produto.imagem} alt={produto.nome} fill className="object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-2 inline-flex rounded-full bg-white/80 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[var(--surface-accent)]">
          {produto.destaque}
        </div>
        <h3 className="text-lg font-extrabold text-[var(--ink-strong)]">{produto.nome}</h3>
        <p className="line-clamp-2 text-sm leading-5 text-[var(--ink-base)]">{produto.descricao}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xs text-[var(--ink-muted)] line-through">R$ 34,90</span>
          <strong className="text-2xl font-extrabold text-[#2f9833]">
            {formatarMoeda(produto.precoBase)}
          </strong>
        </div>
      </div>
    </Link>
  );
}
