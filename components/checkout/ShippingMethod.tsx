"use client";

import { useCheckout } from "@/hooks/useCheckout";

export default function ShippingMethod() {

  // Checkout state
  const { checkout, updateCheckout } = useCheckout();

  return (
    <section className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold">
        Shipping Method
      </h2>

      <div className="space-y-4">

        {/* Standard Delivery */}
        <label className="flex items-center gap-3 cursor-pointer">

          <input
            type="radio"
            name="shipping"
            checked={checkout.shippingMethod === "standard"}
            onChange={() =>
              updateCheckout({
                shippingMethod: "standard",
              })
            }
          />

          <div>
            <p className="font-medium">
              Standard Delivery
            </p>

            <p className="text-sm text-gray-500">
              Delivery in 5–7 days
            </p>
          </div>

        </label>

        {/* Express Delivery */}
        <label className="flex items-center gap-3 cursor-pointer">

          <input
            type="radio"
            name="shipping"
            checked={checkout.shippingMethod === "express"}
            onChange={() =>
              updateCheckout({
                shippingMethod: "express",
              })
            }
          />

          <div>
            <p className="font-medium">
              Express Delivery
            </p>

            <p className="text-sm text-gray-500">
              Delivery in 1–2 days
            </p>
          </div>

        </label>

      </div>

    </section>
  );
}