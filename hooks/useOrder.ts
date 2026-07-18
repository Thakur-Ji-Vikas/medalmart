"use client";

import { useOrderContext } from "@/context/OrderContext";

// Order hook
export function useOrder() {
  return useOrderContext();
}