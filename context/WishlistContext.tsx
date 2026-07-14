"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { WishlistItem } from "@/types/wishlist";
import { Product } from "@/types/product";

// Everything available from the Wishlist Context
type WishlistContextType = {
  wishlist: WishlistItem[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  isWishlisted: (id: number) => boolean;
};

const WishlistContext = createContext<
  WishlistContextType | undefined
>(undefined);

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Global wishlist state
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // Load wishlist from localStorage when the app starts
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");

    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Save wishlist whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  // Add a product only if it doesn't already exist
  function addToWishlist(product: Product) {
    setWishlist((current) => {
      const exists = current.find(
        (item) => item.id === product.id
      );

      if (exists) return current;

      return [...current, product];
    });
  }

  // Remove a product
  function removeFromWishlist(id: number) {
    setWishlist((current) =>
      current.filter((item) => item.id !== id)
    );
  }

  // Check whether a product is already in the wishlist
  function isWishlisted(id: number) {
    return wishlist.some((item) => item.id === id);
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlistContext() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlistContext must be used inside WishlistProvider"
    );
  }

  return context;
}