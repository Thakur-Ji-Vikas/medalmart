"use client";

import { createContext, useContext, useState, ReactNode, useEffect, } from "react";
import { CartItem } from "@/types/cart";
import { Product } from "@/types/product";

// type CartContextType = {
//   cart: CartItem[];
//   addToCart: (product: Product) => void;
// };
type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  // Load cart once when app starts
  useEffect(() => {
  const storedCart = localStorage.getItem("cart");

  if (storedCart) {
    setCart(JSON.parse(storedCart));
  }
}, []);

 // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);



  function addToCart(product: Product) {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

        function increaseQuantity(id: number) {
        setCart((cart) =>
          cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        );
      }

      function decreaseQuantity(id: number) {
        setCart((cart) =>
          cart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            )
            .filter((item) => item.quantity > 0),
        );
      }

      function removeFromCart(id: number) {
        setCart((cart) => cart.filter((item) => item.id !== id));
      }


  return (
    <CartContext.Provider
      //   value={{
      //     cart,
      //     addToCart,
      //   }}
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used inside CartProvider");
  }

  return context;
}
