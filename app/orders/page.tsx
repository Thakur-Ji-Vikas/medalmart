"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import OrderList from "@/components/orders/OrderList";

export default function OrdersPage() {

  return (

    // <ProtectedRoute>

      <main className="mx-auto max-w-6xl px-6 py-12">

        <h1 className="mb-10 text-4xl font-bold">

          My Orders

        </h1>

        <OrderList />

      </main>

    // </ProtectedRoute>

  );

}