"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const itensMenu = [
  { href: "/admin", label: "Painel" },
  { href: "/admin/pedidos", label: "Pedidos" },
  { href: "/admin/cardapio", label: "Cardápio" },
  { href: "/admin/produtos", label: "Produtos" },
  { href: "/admin/produtos/novo", label: "Novo produto" },
  { href: "/admin/categorias", label: "Categorias" },
  { href: "/admin/complementos", label: "Complementos" },
  { href: "/admin/combos", label: "Combos" },
  { href: "/admin/financeiro", label: "Financeiro" },
  { href: "/admin/configuracoes", label: "Configurações" },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f5f1f7] text-[var(--ink-strong)]">
      <div className="mx-auto grid min-h-screen max-w-[1440px] lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="border-b border-[var(--line-soft)] bg-[linear-gradient(180deg,#321044_0%,#230730_100%)] px-5 py-6 text-white lg:border-b-0 lg:border-r">
          <div>
            <p className="brand-wordmark text-[2rem] font-extrabold">Açaí da Casa</p>
            <p className="mt-1 text-sm text-white/72">Operação da açaiteria</p>
          </div>
          <nav className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {itensMenu.map((item) => {
              const ativo =
                item.href === "/admin"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${
                    ativo ? "bg-white text-[#2f0a3e]" : "text-white/72 hover:bg-white/8"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <div className="min-w-0">
          <header className="flex flex-col gap-3 border-b border-[var(--line-soft)] bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--ink-muted)]">Área administrativa</p>
              <h1 className="mt-1 text-[1.8rem] font-extrabold tracking-tight">Gestão da operação</h1>
            </div>
            <div className="rounded-2xl bg-[var(--surface-soft)] px-4 py-3 text-sm font-bold text-[var(--ink-base)]">
              Loja aberta até 23h • Entrega em 35 min
            </div>
          </header>
          <main className="px-5 py-6 sm:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
