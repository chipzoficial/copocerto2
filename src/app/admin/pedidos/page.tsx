import { AdminSection } from "@/components/admin/admin-table";
import { pedidosMockados } from "@/data/mock";
import { corStatus, formatarMoeda } from "@/lib/utils";

const statusFluxo = [
  "Recebido",
  "Em preparo",
  "Saiu para entrega",
  "Pronto para retirada",
  "Finalizado",
  "Cancelado",
];

export default function AdminPedidosPage() {
  return (
    <AdminSection
      titulo="Pedidos"
      descricao="Acompanhe a fila em tempo real e altere rapidamente o status."
      acao={
        <button className="rounded-2xl bg-[var(--surface-accent)] px-4 py-3 text-sm font-extrabold text-white">
          Atualizar fila
        </button>
      }
    >
      <div className="space-y-4">
        {pedidosMockados.map((pedido) => (
          <article key={pedido.id} className="rounded-[24px] border border-[var(--line-soft)] bg-[var(--surface-soft)] px-4 py-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-extrabold text-[var(--ink-strong)]">{pedido.id}</h3>
                  <span className={`rounded-full px-3 py-1 text-sm font-bold ${corStatus(pedido.status)}`}>
                    {pedido.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[var(--ink-base)]">
                  {pedido.cliente} • {pedido.telefone} • {pedido.formaEntrega} • {pedido.horario}
                </p>
                <p className="mt-1 text-sm text-[var(--ink-base)]">
                  {pedido.endereco} • {pedido.pagamento}
                </p>
              </div>
              <strong className="text-[1.7rem] font-extrabold text-[var(--surface-accent)]">
                {formatarMoeda(pedido.valor)}
              </strong>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {statusFluxo.map((status) => (
                <button
                  key={status}
                  className={`rounded-full px-3 py-2 text-sm font-bold ${
                    status === pedido.status
                      ? "bg-[var(--surface-accent)] text-white"
                      : "bg-white text-[var(--ink-base)]"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
    </AdminSection>
  );
}
