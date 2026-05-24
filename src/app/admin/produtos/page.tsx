import Link from "next/link";
import { AdminSection } from "@/components/admin/admin-table";
import { produtos } from "@/data/mock";
import { formatarMoeda } from "@/lib/utils";

export default function AdminProdutosPage() {
  return (
    <AdminSection
      titulo="Produtos"
      descricao="Lista detalhada de produtos para manutenção rápida do catálogo."
      acao={
        <Link
          href="/admin/produtos/novo"
          className="rounded-2xl bg-[var(--cta)] px-4 py-3 text-sm font-extrabold text-[#2d2b14]"
        >
          Adicionar produto
        </Link>
      }
    >
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-[var(--ink-muted)]">
            <tr>
              <th className="pb-3 pr-4 font-bold">Produto</th>
              <th className="pb-3 pr-4 font-bold">Categoria</th>
              <th className="pb-3 pr-4 font-bold">Preço base</th>
              <th className="pb-3 pr-4 font-bold">Tamanhos</th>
              <th className="pb-3 font-bold">Status</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id} className="border-t border-[var(--line-soft)]">
                <td className="py-4 pr-4">
                  <p className="font-extrabold text-[var(--ink-strong)]">{produto.nome}</p>
                  <p className="text-[var(--ink-base)]">{produto.descricao}</p>
                </td>
                <td className="py-4 pr-4">{produto.categoria}</td>
                <td className="py-4 pr-4">{formatarMoeda(produto.precoBase)}</td>
                <td className="py-4 pr-4">{produto.tamanhos.map((item) => item.nome).join(", ")}</td>
                <td className="py-4">
                  <span className="rounded-full bg-[var(--surface-soft)] px-3 py-1 font-bold text-[var(--ink-base)]">
                    {produto.disponivel ? "Ativo" : "Inativo"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminSection>
  );
}
