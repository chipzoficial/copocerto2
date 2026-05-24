import { AdminSection } from "@/components/admin/admin-table";

export default function AdminFinanceiroPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <AdminSection titulo="Resumo financeiro" descricao="Indicadores do período atual.">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: "Faturamento", value: "R$ 4.820,00" },
            { label: "Pedidos pagos", value: "112" },
            { label: "Pedidos pendentes", value: "14" },
            { label: "Ticket médio", value: "R$ 43,05" },
          ].map((item) => (
            <div key={item.label} className="rounded-[22px] bg-[var(--surface-soft)] px-4 py-4">
              <p className="text-sm font-bold text-[var(--ink-muted)]">{item.label}</p>
              <strong className="mt-3 block text-[1.8rem] font-extrabold text-[var(--ink-strong)]">
                {item.value}
              </strong>
            </div>
          ))}
        </div>
      </AdminSection>

      <AdminSection titulo="Vendas por período" descricao="Leitura rápida para decisões operacionais.">
        <div className="space-y-4">
          {[
            ["Almoço", "R$ 1.260,00", "29 pedidos"],
            ["Tarde", "R$ 980,00", "23 pedidos"],
            ["Noite", "R$ 2.580,00", "60 pedidos"],
          ].map(([periodo, valor, volume]) => (
            <div key={periodo} className="rounded-[22px] border border-[var(--line-soft)] px-4 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-[var(--ink-strong)]">{periodo}</h3>
                  <p className="text-sm text-[var(--ink-base)]">{volume}</p>
                </div>
                <strong className="text-lg font-extrabold text-[var(--surface-accent)]">{valor}</strong>
              </div>
            </div>
          ))}
        </div>
      </AdminSection>
    </div>
  );
}
