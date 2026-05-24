import { AdminSection } from "@/components/admin/admin-table";
import { categorias, produtos } from "@/data/mock";
import { formatarMoeda } from "@/lib/utils";

export default function AdminCardapioPage() {
  return (
    <div className="space-y-6">
      <AdminSection titulo="Cardápio" descricao="Lista visual pronta para produção, com filtros e ações principais.">
        <div className="flex flex-wrap gap-2">
          <button className="rounded-full bg-[var(--surface-accent)] px-4 py-2 text-sm font-extrabold text-white">
            Todos
          </button>
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              className="rounded-full bg-[var(--surface-soft)] px-4 py-2 text-sm font-bold text-[var(--ink-base)]"
            >
              {categoria.nome}
            </button>
          ))}
        </div>
      </AdminSection>

      <AdminSection
        titulo="Produtos"
        descricao="Controle do catálogo com status e atalhos operacionais."
        acao={
          <button className="rounded-2xl bg-[var(--cta)] px-4 py-3 text-sm font-extrabold text-[#2d2b14]">
            Adicionar novo produto
          </button>
        }
      >
        <div className="space-y-4">
          {produtos.map((produto) => (
            <article key={produto.id} className="grid gap-4 rounded-[24px] border border-[var(--line-soft)] px-4 py-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-extrabold text-[var(--ink-strong)]">{produto.nome}</h3>
                  <span className="rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--ink-base)]">
                    {produto.categoria}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[var(--ink-base)]">{produto.descricao}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <strong className="mr-3 text-lg font-extrabold text-[var(--surface-accent)]">
                  {formatarMoeda(produto.precoBase)}
                </strong>
                <button className="rounded-full bg-[var(--surface-soft)] px-4 py-2 text-sm font-bold text-[var(--ink-base)]">
                  {produto.disponivel ? "Ativo" : "Inativo"}
                </button>
                <button className="rounded-full border border-[var(--line-soft)] px-4 py-2 text-sm font-bold text-[var(--ink-base)]">
                  Editar
                </button>
              </div>
            </article>
          ))}
        </div>
      </AdminSection>
    </div>
  );
}
