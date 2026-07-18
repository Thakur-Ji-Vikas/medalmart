import Link from "next/link";
import { Order } from "@/types/order";
import OrderStatusBadge from "./OrderStatusBadge";

type OrderCardProps = {
  order: Order;
};

export default function OrderCard({
  order,
}: OrderCardProps) {

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-bold">
          Order #{order.id}
        </h2>

        <OrderStatusBadge
          status={order.status}
        />

      </div>

      <p className="mt-3 text-gray-600">
        Date: {order.createdAt}
      </p>

      <p className="mt-2">
        Total:
        <span className="ml-2 font-semibold text-amber-600">
          ₹{order.total}
        </span>
      </p>

      <Link
        href={`/orders/${order.id}`}
        className="mt-6 inline-block rounded-lg bg-amber-600 px-5 py-2 text-white hover:bg-amber-700"
      >
        View Details
      </Link>

    </div>
  );
}