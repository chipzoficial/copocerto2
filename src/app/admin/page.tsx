import { AdminSection } from "@/components/admin/admin-table";
import { pedidosMockados, produtos } from "@/data/mock";
import { formatarMoeda } from "@/lib/utils";

export default function AdminPage() {
  const faturamento = pedidosMockados.reduce((total, pedido) => total + pedido.valor, 0);
  const ticketMedio = faturamento / pedidosMockados.length;

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { titulo: "Pedidos de hoje", valor: "48", detalhe: "+12% vs ontem" },
          { titulo: "Faturamento do dia", valor: formatarMoeda(faturamento), detalhe: "Pico às 19h30" },
          { titulo: "Ticket médio", valor: formatarMoeda(ticketMedio), detalhe: "Meta: R$ 39,00" },
          { titulo: "Tempo médio", valor: "34 min", detalhe: "Entrega dentro da meta" },
        ].map((item) => (
          <article key={item.titulo} className="rounded-[28px] bg-white px-5 py-5 shadow-[0_16px_40px_rgba(39,9,56,0.05)]">
            <p className="text-sm font-bold text-[var(--ink-muted)]">{item.titulo}</p>
            <strong className="mt-3 block text-[2.2rem] font-extrabold tracking-tight text-[var(--ink-strong)]">
              {item.valor}
            </strong>
            <p className="mt-2 text-sm text-[var(--ink-base)]">{item.detalhe}</p>
          </article>
        ))}
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <AdminSection
          titulo="Últimos pedidos"
          descricao="Visão rápida para operação de balcão e entrega."
        >
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-[var(--ink-muted)]">
                <tr>
                  <th className="pb-3 pr-4 font-bold">Pedido</th>
                  <th className="pb-3 pr-4 font-bold">Cliente</th>
                  <th className="pb-3 pr-4 font-bold">Entrega</th>
                  <th className="pb-3 pr-4 font-bold">Valor</th>
                  <th className="pb-3 font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {pedidosMockados.map((pedido) => (
                  <tr key={pedido.id} className="border-t border-[var(--line-soft)]">
                    <td className="py-4 pr-4 font-extrabold">{pedido.id}</td>
                    <td className="py-4 pr-4">{pedido.cliente}</td>
                    <td className="py-4 pr-4">{pedido.formaEntrega}</td>
                    <td className="py-4 pr-4">{formatarMoeda(pedido.valor)}</td>
                    <td className="py-4">
                      <span className="rounded-full bg-[rgba(95,28,129,0.09)] px-3 py-1 font-bold text-[var(--surface-accent)]">
                        {pedido.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AdminSection>

        <AdminSection titulo="Produtos mais vendidos" descricao="Baseado nos pedidos mockados de hoje.">
          <div className="space-y-4">
            {produtos.slice(0, 5).map((produto, index) => (
              <div key={produto.id} className="flex items-center justify-between rounded-[22px] bg-[var(--surface-soft)] px-4 py-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                    #{index + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold text-[var(--ink-strong)]">{produto.nome}</h3>
                  <p className="text-sm text-[var(--ink-base)]">{produto.categoria}</p>
                </div>
                <div className="text-right">
                  <strong className="text-lg font-extrabold text-[var(--surface-accent)]">
                    {formatarMoeda(produto.precoBase)}
                  </strong>
                  <p className="text-sm text-[var(--ink-base)]">{17 - index} vendas</p>
                </div>
              </div>
            ))}
          </div>
        </AdminSection>
      </div>
    </div>
  );
}
