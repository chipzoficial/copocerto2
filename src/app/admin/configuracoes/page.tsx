import { AdminSection } from "@/components/admin/admin-table";

export default function AdminConfiguracoesPage() {
  return (
    <AdminSection
      titulo="Configurações"
      descricao="Dados operacionais essenciais da açaiteria."
      acao={
        <button className="rounded-2xl bg-[var(--surface-accent)] px-4 py-3 text-sm font-extrabold text-white">
          Salvar alterações
        </button>
      }
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {[
          "Nome do negócio",
          "Logo",
          "Horário de funcionamento",
          "Endereço",
          "Telefone/WhatsApp",
          "Taxa de entrega",
          "Tempo estimado de entrega",
          "Formas de pagamento aceitas",
        ].map((campo) => (
          <input
            key={campo}
            className="h-14 rounded-[20px] border border-[var(--line-soft)] px-4 outline-none"
            placeholder={campo}
            defaultValue={
              campo === "Nome do negócio"
                ? "Açaí da Casa"
                : campo === "Telefone/WhatsApp"
                  ? "(11) 99888-2233"
                  : campo === "Taxa de entrega"
                    ? "R$ 6,00"
                    : campo === "Tempo estimado de entrega"
                      ? "30 a 45 min"
                      : undefined
            }
          />
        ))}
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="flex items-center gap-3 rounded-[20px] bg-[var(--surface-soft)] px-4 py-4 text-sm font-bold text-[var(--ink-base)]">
          <input type="checkbox" defaultChecked />
          Retirada ativa
        </label>
        <label className="flex items-center gap-3 rounded-[20px] bg-[var(--surface-soft)] px-4 py-4 text-sm font-bold text-[var(--ink-base)]">
          <input type="checkbox" defaultChecked />
          Entrega ativa
        </label>
      </div>
    </AdminSection>
  );
}
