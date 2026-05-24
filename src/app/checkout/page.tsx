import { CheckoutView } from "@/components/customer/checkout-view";
import { CustomerShell } from "@/components/customer/customer-shell";

export default function CheckoutPage() {
  return (
    <CustomerShell className="p-0">
      <CheckoutView />
    </CustomerShell>
  );
}
