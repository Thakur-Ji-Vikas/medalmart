"use client";

import { useOrder } from "@/hooks/useOrder";
import OrderCard from "./OrderCard";

export default function OrderList() {

  const { orders } = useOrder();

  if (orders.length === 0) {

    return (
      <p className="text-center text-gray-500">
        No orders found.
      </p>
    );

  }

  return (

    <div className="space-y-6">

      {orders.map((order) => (

        <OrderCard
          key={order.id}
          order={order}
        />

      ))}

    </div>

  );
}