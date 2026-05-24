import { CartView } from "@/components/customer/cart-view";
import { CustomerShell } from "@/components/customer/customer-shell";

export default function CarrinhoPage() {
  return (
    <CustomerShell className="p-0">
      <CartView />
    </CustomerShell>
  );
}
