"use client";

import { useSearchContext } from "@/context/SearchContext";

// Search hook
export function useSearch() {
  return useSearchContext();
}