"use client";

import AddressForm from "@/components/checkout/AddressForm";

export default function CheckoutPage() {

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <h1 className="mb-10 text-4xl font-bold">
        Checkout
      </h1>

      <AddressForm />

    </main>
  );
}