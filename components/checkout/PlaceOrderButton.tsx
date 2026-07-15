"use client";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";

export default function PlaceOrderButton() {
  // Access the current cart
  const { cart } = useCart();

  // Disable button if cart is empty
  const isCartEmpty = cart.length === 0;

  return (
    <section className="mt-8">
      {/* <button
        disabled={isCartEmpty}
        className={`w-full rounded-xl py-4 text-lg font-semibold transition
          ${
            isCartEmpty
              ? "cursor-not-allowed bg-gray-300 text-gray-500"
              : "bg-amber-600 text-white hover:bg-amber-700"
          }`}
      >
        {isCartEmpty ? "Cart is Empty" : "Place Order"}
      </button> */}
      <Button disabled={isCartEmpty} className="w-full py-4 text-lg">
        {isCartEmpty ? "Cart is Empty" : "Place Order"}
      </Button>
    </section>
  );
}
