"use client";

import AddressForm from "@/components/checkout/AddressForm";
import ShippingMethod from "@/components/checkout/ShippingMethod";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import OrderSummary from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-10 text-4xl font-bold">Checkout</h1>

      <div className="grid gap-10 lg:grid-cols-3">

  {/* Checkout Form */}
  <div className="lg:col-span-2">

    <AddressForm />

    <ShippingMethod />

    <PaymentMethod />

  </div>

  {/* Order Summary */}
  <div>

    <OrderSummary />

  </div>

</div>
    </main>
  );
}
