"use client";

import { useCart } from "@/hooks/useCart";

export default function OrderSummary() {
  // Get cart items from the global cart context
  const { cart } = useCart();

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Temporary delivery charge
  // Later we'll calculate this dynamically.
  const deliveryCharge = subtotal > 0 ? 99 : 0;

  // Final payable amount
  const total = subtotal + deliveryCharge;

  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      {/* Section Title */}
      <h2 className="mb-6 text-2xl font-bold">
        Order Summary
      </h2>

      {/* Cart Items */}
      <div className="space-y-4">

        {cart.length === 0 ? (

          <p className="text-gray-500">
            Your cart is empty.
          </p>

        ) : (

          cart.map((item) => (

            <div
              key={item.id}
              className="flex justify-between border-b pb-3"
            >

              <div>

                <p className="font-medium">
                  {item.name}
                </p>

                <p className="text-sm text-gray-500">
                  Qty : {item.quantity}
                </p>

              </div>

              <p className="font-semibold">
                ₹{item.price * item.quantity}
              </p>

            </div>

          ))

        )}

      </div>

      {/* Price Summary */}
      <div className="mt-8 space-y-3 border-t pt-6">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span>₹{deliveryCharge}</span>
        </div>

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span className="text-amber-600">
            ₹{total}
          </span>
        </div>

      </div>

    </section>
  );
}