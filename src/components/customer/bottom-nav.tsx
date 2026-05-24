"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GridIcon, HomeIcon, ReceiptIcon, UserIcon } from "@/components/icons";

const items = [
  { href: "/", label: "Início", icon: HomeIcon },
  { href: "/#categorias", label: "Categorias", icon: GridIcon },
  { href: "/carrinho", label: "Pedidos", icon: ReceiptIcon },
  { href: "/checkout", label: "Perfil", icon: UserIcon },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="ios-bottom-safe fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-[398px] -translate-x-1/2 rounded-[28px] border border-white/60 bg-white/92 px-3 pb-3 pt-3 shadow-[0_20px_50px_rgba(35,7,48,0.16)] backdrop-blur-xl">
      <div className="grid grid-cols-4 gap-1">
        {items.map(({ href, label, icon: Icon }) => {
          const ativo =
            href === "/"
              ? pathname === "/"
              : href.includes("#")
                ? pathname === "/"
                : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 rounded-[20px] px-3 py-2 text-[11px] font-semibold transition ${
                ativo ? "text-[var(--surface-accent)]" : "text-[var(--ink-muted)]"
              }`}
            >
              <span
                className={`flex size-10 items-center justify-center rounded-[16px] ${
                  ativo
                    ? "bg-[linear-gradient(135deg,rgba(95,28,129,0.16),rgba(95,28,129,0.06))] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]"
                    : "bg-transparent"
                }`}
              >
                <Icon size={18} />
              </span>
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
