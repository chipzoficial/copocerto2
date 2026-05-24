import Image from "next/image";
import Link from "next/link";
import { BellIcon, SearchIcon, UserIcon } from "@/components/icons";
import { BottomNav } from "@/components/customer/bottom-nav";
import { ComboHighlight } from "@/components/customer/combo-highlight";
import { CustomerShell } from "@/components/customer/customer-shell";
import { HeroBanner } from "@/components/customer/hero-banner";
import { ProductCard } from "@/components/customer/product-card";
import { SectionHeader } from "@/components/customer/section-header";
import { bannerPrincipal, categorias, produtos } from "@/data/mock";

const chipsEmoji: Record<string, string> = {
  bowl: "🍇",
  spark: "✨",
  cup: "🥤",
  ice: "🍨",
  bottle: "🧃",
};

export default function HomePage() {
  const maisPedidos = produtos.filter((produto) => produto.maisPedido);
  const combos = produtos.filter((produto) => produto.combo);

  return (
    <CustomerShell>
      <div className="min-h-screen bg-[var(--surface)]">
        <header className="glow-header px-5 pb-7 pt-5 text-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="brand-wordmark text-[2.1rem] font-extrabold tracking-tight">Açaí da Casa</p>
              <p className="mt-1 text-base text-white/86">Olá, prazer ter você aqui! 💜</p>
            </div>
            <div className="flex gap-2">
              <button className="flex size-11 items-center justify-center rounded-full bg-white/10">
                <BellIcon size={18} />
              </button>
              <button className="flex size-11 items-center justify-center rounded-full bg-white/10">
                <UserIcon size={18} />
              </button>
            </div>
          </div>
          <div className="mt-5 flex h-14 items-center gap-3 rounded-full bg-white px-4 text-[var(--ink-muted)] shadow-[0_18px_36px_rgba(43,7,50,0.16)]">
            <SearchIcon size={18} />
            <span className="text-sm">Buscar produtos...</span>
          </div>
        </header>

        <section className="-mt-4 rounded-t-[34px] bg-[var(--surface)] px-5 pb-24 pt-5">
          <HeroBanner {...bannerPrincipal} />

          <div id="categorias" className="mt-5 flex gap-3 overflow-x-auto pb-1">
            {categorias.map((categoria, index) => (
              <button
                key={categoria.id}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-3 text-sm font-bold ${
                  index === 0
                    ? "border-transparent bg-[var(--surface-accent)] text-white"
                    : "border-[var(--line-soft)] bg-white text-[var(--ink-base)]"
                }`}
              >
                <span>{chipsEmoji[categoria.icone]}</span>
                {categoria.nome}
              </button>
            ))}
          </div>

          <section className="mt-7">
            <SectionHeader titulo="Os mais pedidos" acao="Ver todos" />
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {maisPedidos.map((produto) => (
                <ProductCard key={produto.id} produto={produto} />
              ))}
            </div>
          </section>

          <section className="mt-8">
            <SectionHeader titulo="Combos em destaque" acao="Ver todos" />
            <div className="mt-4 space-y-4">
              {combos.map((produto) => (
                <ComboHighlight key={produto.id} produto={produto} />
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-[30px] bg-[linear-gradient(135deg,#3c0d50_0%,#250530_100%)] px-5 py-5 text-white">
            <div className="flex items-center gap-4">
              <div className="relative h-28 w-24 overflow-hidden rounded-[22px]">
                <Image src="/images/combo-familia.svg" alt="Combo família" fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-white/66">Oferta da noite</p>
                <h3 className="mt-1 text-[1.55rem] font-extrabold leading-tight">
                  Monte seu combo e ganhe entrega reduzida
                </h3>
                <p className="mt-2 text-sm leading-5 text-white/82">
                  Combinações pensadas para aumentar o ticket com sensação de vantagem real.
                </p>
                <Link
                  href="/produto/combo-familia"
                  className="mt-4 inline-flex rounded-full bg-[var(--cta)] px-4 py-3 text-sm font-extrabold text-[#2d2a14]"
                >
                  Montar agora
                </Link>
              </div>
            </div>
          </section>
        </section>

        <BottomNav />
      </div>
    </CustomerShell>
  );
}
