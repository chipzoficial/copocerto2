import { AdminSection } from "@/components/admin/admin-table";
import { categorias, complementos } from "@/data/mock";

export default function AdminNovoProdutoPage() {
  return (
    <AdminSection
      titulo="Novo produto"
      descricao="Estrutura pronta para cadastro com foco em clareza e expansão futura."
      acao={
        <button className="rounded-2xl bg-[var(--surface-accent)] px-4 py-3 text-sm font-extrabold text-white">
          Salvar rascunho
        </button>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <input className="h-14 w-full rounded-[20px] border border-[var(--line-soft)] px-4 outline-none" placeholder="Nome do produto" />
          <textarea className="min-h-36 w-full rounded-[20px] border border-[var(--line-soft)] px-4 py-4 outline-none" placeholder="Descrição do produto" />
          <select className="h-14 w-full rounded-[20px] border border-[var(--line-soft)] px-4 outline-none">
            <option>Selecione uma categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.id}>{categoria.nome}</option>
            ))}
          </select>
          <input className="h-14 w-full rounded-[20px] border border-[var(--line-soft)] px-4 outline-none" placeholder="Preço base" />
          <input className="h-14 w-full rounded-[20px] border border-[var(--line-soft)] px-4 outline-none" placeholder="Imagem do produto" />
        </div>

        <div className="space-y-5">
          <div className="rounded-[24px] bg-[var(--surface-soft)] px-4 py-4">
            <h3 className="text-lg font-extrabold text-[var(--ink-strong)]">Tamanhos disponíveis</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {["300 ml", "500 ml", "700 ml"].map((tamanho) => (
                <label key={tamanho} className="rounded-[18px] bg-white px-4 py-3 text-sm font-bold text-[var(--ink-base)]">
                  <input type="checkbox" className="mr-2" defaultChecked={tamanho !== "700 ml"} />
                  {tamanho}
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] bg-[var(--surface-soft)] px-4 py-4">
            <h3 className="text-lg font-extrabold text-[var(--ink-strong)]">Complementos permitidos</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {complementos.map((complemento) => (
                <label key={complemento.id} className="rounded-[18px] bg-white px-4 py-3 text-sm font-bold text-[var(--ink-base)]">
                  <input type="checkbox" className="mr-2" defaultChecked={complemento.ativo} />
                  {complemento.nome}
                </label>
              ))}
            </div>
          </div>

          <label className="flex items-center gap-3 rounded-[20px] border border-[var(--line-soft)] px-4 py-4 text-sm font-bold text-[var(--ink-base)]">
            <input type="checkbox" defaultChecked />
            Produto ativo
          </label>
        </div>
      </div>
    </AdminSection>
  );
}
