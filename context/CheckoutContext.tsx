"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import { CheckoutData } from "@/types/checkout";

// Context interface
type CheckoutContextType = {
  checkout: CheckoutData;

  updateCheckout: (data: Partial<CheckoutData>) => void;
};

// Create Context
const CheckoutContext = createContext<
  CheckoutContextType | undefined
>(undefined);

export function CheckoutProvider({
  children,
}: {
  children: ReactNode;
}) {

  // Checkout state
  const [checkout, setCheckout] = useState<CheckoutData>({
    address: {
      fullName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pinCode: "",
    },

    shippingMethod: "standard",

    paymentMethod: "cod",
  });

  // Update checkout
  function updateCheckout(data: Partial<CheckoutData>) {
    setCheckout((previous) => ({
      ...previous,
      ...data,
    }));
  }

  // Provide context
  return (
    <CheckoutContext.Provider
      value={{
        checkout,
        updateCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

// Custom hook
export function useCheckoutContext() {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw new Error(
      "useCheckoutContext must be used inside CheckoutProvider"
    );
  }

  return context;
}