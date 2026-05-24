import { AdminSection } from "@/components/admin/admin-table";
import { complementos } from "@/data/mock";
import { formatarMoeda } from "@/lib/utils";

export default function AdminComplementosPage() {
  return (
    <AdminSection
      titulo="Complementos"
      descricao="Gerencie adicionais e preços complementares."
      acao={
        <button className="rounded-2xl bg-[var(--surface-accent)] px-4 py-3 text-sm font-extrabold text-white">
          Novo adicional
        </button>
      }
    >
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-[var(--ink-muted)]">
            <tr>
              <th className="pb-3 pr-4 font-bold">Nome</th>
              <th className="pb-3 pr-4 font-bold">Categoria</th>
              <th className="pb-3 pr-4 font-bold">Preço</th>
              <th className="pb-3 pr-4 font-bold">Status</th>
              <th className="pb-3 font-bold">Ações</th>
            </tr>
          </thead>
          <tbody>
            {complementos.map((item) => (
              <tr key={item.id} className="border-t border-[var(--line-soft)]">
                <td className="py-4 pr-4 font-extrabold">{item.nome}</td>
                <td className="py-4 pr-4">{item.categoria}</td>
                <td className="py-4 pr-4">{formatarMoeda(item.preco)}</td>
                <td className="py-4 pr-4">{item.ativo ? "Ativo" : "Inativo"}</td>
                <td className="py-4">
                  <div className="flex gap-2">
                    <button className="rounded-full bg-[var(--surface-soft)] px-4 py-2 font-bold text-[var(--ink-base)]">Editar</button>
                    <button className="rounded-full bg-[var(--surface-soft)] px-4 py-2 font-bold text-[var(--ink-base)]">Desativar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminSection>
  );
}
