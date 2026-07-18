"use client";

import { useCheckoutContext } from "@/context/CheckoutContext";

// Checkout hook
export function useCheckout() {
  return useCheckoutContext();
}