"use client";

import { useCart } from "@/hooks/useCart";
import { useCheckout } from "@/hooks/useCheckout";

export default function OrderSummary() {

  // Cart state
  const { cart } = useCart();

  // Checkout state
  const { checkout } = useCheckout();

  // Shipping charge
  const shippingCharge =
    checkout.shippingMethod === "express" ? 150 : 50;

  // Cart subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Grand total
  const grandTotal = subtotal + shippingCharge;

  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold">
        Order Summary
      </h2>

      {/* Cart Items */}
      <div className="space-y-3">

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between"
          >
            <span>
              {item.name} × {item.quantity}
            </span>

            <span>
              ₹{item.price * item.quantity}
            </span>
          </div>
        ))}

      </div>

      <hr className="my-6" />

      {/* Subtotal */}
      <div className="flex justify-between">

        <span>Subtotal</span>

        <span>₹{subtotal}</span>

      </div>

      {/* Shipping */}
      <div className="mt-3 flex justify-between">

        <span>Shipping</span>

        <span>₹{shippingCharge}</span>

      </div>

      <hr className="my-6" />

      {/* Grand Total */}
      <div className="flex justify-between text-xl font-bold">

        <span>Total</span>

        <span>₹{grandTotal}</span>

      </div>

    </section>
  );
}