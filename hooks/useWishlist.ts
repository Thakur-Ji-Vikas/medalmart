"use client";

import { useWishlistContext } from "@/context/WishlistContext";

// Custom hook for accessing wishlist anywhere in the app
export function useWishlist() {
  return useWishlistContext();
}