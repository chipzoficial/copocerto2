import { notFound } from "next/navigation";
import { ProductCustomizer } from "@/components/customer/product-customizer";
import { CustomerShell } from "@/components/customer/customer-shell";
import { complementos, produtos } from "@/data/mock";

export default async function ProdutoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const produto = produtos.find((item) => item.id === id);

  if (!produto) {
    notFound();
  }

  const addons = complementos.filter((item) =>
    produto.complementosPermitidos.includes(item.id),
  );

  return (
    <CustomerShell className="p-0">
      <ProductCustomizer produto={produto} addons={addons} />
    </CustomerShell>
  );
}
