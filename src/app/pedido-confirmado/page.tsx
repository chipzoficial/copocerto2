import { CustomerShell } from "@/components/customer/customer-shell";
import { OrderConfirmedView } from "@/components/customer/order-confirmed-view";

export default function PedidoConfirmadoPage() {
  return (
    <CustomerShell className="p-0">
      <OrderConfirmedView />
    </CustomerShell>
  );
}
