import { ReactNode } from "react";

export function AdminSection({
  titulo,
  descricao,
  children,
  acao,
}: {
  titulo: string;
  descricao?: string;
  children: ReactNode;
  acao?: ReactNode;
}) {
  return (
    <section className="rounded-[28px] bg-white px-5 py-5 shadow-[0_16px_40px_rgba(39,9,56,0.05)]">
      <div className="mb-5 flex flex-col gap-3 border-b border-[var(--line-soft)] pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-[1.5rem] font-extrabold tracking-tight text-[var(--ink-strong)]">{titulo}</h2>
          {descricao ? <p className="mt-1 text-sm text-[var(--ink-base)]">{descricao}</p> : null}
        </div>
        {acao}
      </div>
      {children}
    </section>
  );
}
