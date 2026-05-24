import { AdminSection } from "@/components/admin/admin-table";
import { categorias } from "@/data/mock";

export default function AdminCategoriasPage() {
  return (
    <AdminSection
      titulo="Categorias"
      descricao="Organize as principais linhas do cardápio."
      acao={
        <button className="rounded-2xl bg-[var(--cta)] px-4 py-3 text-sm font-extrabold text-[#2d2b14]">
          Nova categoria
        </button>
      }
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categorias.map((categoria) => (
          <article key={categoria.id} className="rounded-[24px] border border-[var(--line-soft)] bg-[var(--surface-soft)] px-4 py-4">
            <h3 className="text-xl font-extrabold text-[var(--ink-strong)]">{categoria.nome}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--ink-base)]">{categoria.descricao}</p>
            <div className="mt-4 flex gap-2">
              <button className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[var(--ink-base)]">Editar</button>
              <button className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[var(--ink-base)]">Ocultar</button>
            </div>
          </article>
        ))}
      </div>
    </AdminSection>
  );
}
