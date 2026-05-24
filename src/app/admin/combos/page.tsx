import { AdminSection } from "@/components/admin/admin-table";
import { produtos } from "@/data/mock";
import { formatarMoeda } from "@/lib/utils";

export default function AdminCombosPage() {
  const combos = produtos.filter((produto) => produto.combo);

  return (
    <AdminSection
      titulo="Combos"
      descricao="Combinações promocionais com forte apelo comercial."
      acao={
        <button className="rounded-2xl bg-[var(--cta)] px-4 py-3 text-sm font-extrabold text-[#2d2b14]">
          Novo combo
        </button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {combos.map((combo) => (
          <article key={combo.id} className="rounded-[26px] border border-[var(--line-soft)] bg-[var(--surface-soft)] px-4 py-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--surface-accent)]">
                  {combo.destaque}
                </p>
                <h3 className="mt-3 text-[1.4rem] font-extrabold text-[var(--ink-strong)]">{combo.nome}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-base)]">{combo.descricaoLonga}</p>
              </div>
              <strong className="text-xl font-extrabold text-[var(--surface-accent)]">
                {formatarMoeda(combo.precoBase)}
              </strong>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[var(--ink-base)]">Editar combo</button>
              <button className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[var(--ink-base)]">Ativo</button>
            </div>
          </article>
        ))}
      </div>
    </AdminSection>
  );
}
