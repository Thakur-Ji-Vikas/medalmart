"use client";

import { useCheckout } from "@/hooks/useCheckout";

export default function PaymentMethod() {

  // Checkout state
  const { checkout, updateCheckout } = useCheckout();

  return (
    <section className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold">
        Payment Method
      </h2>

      <div className="space-y-4">

        {/* Cash on Delivery */}
        <label className="flex cursor-pointer items-center gap-3">

          <input
            type="radio"
            name="payment"
            checked={checkout.paymentMethod === "cod"}
            onChange={() =>
              updateCheckout({
                paymentMethod: "cod",
              })
            }
          />

          <div>
            <p className="font-medium">
              Cash on Delivery
            </p>

            <p className="text-sm text-gray-500">
              Pay when your order arrives.
            </p>
          </div>

        </label>

        {/* UPI */}
        <label className="flex cursor-pointer items-center gap-3">

          <input
            type="radio"
            name="payment"
            checked={checkout.paymentMethod === "upi"}
            onChange={() =>
              updateCheckout({
                paymentMethod: "upi",
              })
            }
          />

          <div>
            <p className="font-medium">
              UPI
            </p>

            <p className="text-sm text-gray-500">
              Pay using any UPI app.
            </p>
          </div>

        </label>

        {/* Credit / Debit Card */}
        <label className="flex cursor-pointer items-center gap-3">

          <input
            type="radio"
            name="payment"
            checked={checkout.paymentMethod === "card"}
            onChange={() =>
              updateCheckout({
                paymentMethod: "card",
              })
            }
          />

          <div>
            <p className="font-medium">
              Credit / Debit Card
            </p>

            <p className="text-sm text-gray-500">
              Visa, Mastercard, RuPay and more.
            </p>
          </div>

        </label>

      </div>

    </section>
  );
}