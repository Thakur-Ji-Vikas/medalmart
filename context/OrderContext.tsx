"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import { Order } from "@/types/order";
import { orders as mockOrders } from "@/data/orders";

// Context interface
type OrderContextType = {
  orders: Order[];

  addOrder: (order: Order) => void;
};

// Create Context
const OrderContext = createContext<
  OrderContextType | undefined
>(undefined);

export function OrderProvider({
  children,
}: {
  children: ReactNode;
}) {

  // Orders state
  const [orders, setOrders] = useState<Order[]>(mockOrders);

  // Add new order
  function addOrder(order: Order) {
    setOrders((previous) => [order, ...previous]);
  }

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

// Custom hook
export function useOrderContext() {

  const context = useContext(OrderContext);

  if (!context) {
    throw new Error(
      "useOrderContext must be used inside OrderProvider"
    );
  }

  return context;
}