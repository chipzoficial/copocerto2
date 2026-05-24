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
    <nav className="sticky bottom-0 z-20 border-t border-[var(--line-soft)] bg-white/96 px-4 pb-5 pt-3 backdrop-blur">
      <div className="grid grid-cols-4 gap-2">
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
              className={`flex flex-col items-center gap-1 rounded-2xl px-3 py-2 text-[11px] font-semibold transition ${
                ativo ? "text-[var(--surface-accent)]" : "text-[var(--ink-muted)]"
              }`}
            >
              <span
                className={`flex size-10 items-center justify-center rounded-2xl ${
                  ativo ? "bg-[rgba(95,28,129,0.12)]" : "bg-transparent"
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
