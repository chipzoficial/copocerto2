export function SectionHeader({
  titulo,
  acao,
}: {
  titulo: string;
  acao?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-[1.35rem] font-extrabold tracking-tight text-[var(--ink-strong)]">
        {titulo}
      </h2>
      {acao ? (
        <button className="text-sm font-bold text-[var(--surface-accent)]">{acao}</button>
      ) : null}
    </div>
  );
}
