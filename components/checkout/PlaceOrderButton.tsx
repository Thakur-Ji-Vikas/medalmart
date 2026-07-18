"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import { useCheckout } from "@/hooks/useCheckout";

export default function PlaceOrderButton() {

  // Router
  const router = useRouter();

  // Cart
  const { cart, clearCart } = useCart();

  // Checkout
  const { checkout } = useCheckout();

  // Place order
  function handlePlaceOrder() {

    // Validate cart
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // Validate address
    if (
      !checkout.address.fullName ||
      !checkout.address.phone ||
      !checkout.address.address ||
      !checkout.address.city ||
      !checkout.address.state ||
      !checkout.address.pinCode
    ) {
      alert("Please complete the delivery address.");
      return;
    }

    // Mock success
    alert("Order placed successfully!");

    // Empty cart
    clearCart();

    // Redirect
    router.push("/");
  }

  return (
    <button
      onClick={handlePlaceOrder}
      className="mt-8 w-full rounded-xl bg-amber-600 py-4 font-semibold text-white hover:bg-amber-700"
    >
      Place Order
    </button>
  );
}