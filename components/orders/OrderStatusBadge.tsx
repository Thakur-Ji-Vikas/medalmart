import { OrderStatus } from "@/types/order";

type OrderStatusBadgeProps = {
  status: OrderStatus;
};

export default function OrderStatusBadge({
  status,
}: OrderStatusBadgeProps) {

  const colors = {
    pending: "bg-yellow-100 text-yellow-700",
    processing: "bg-blue-100 text-blue-700",
    shipped: "bg-purple-100 text-purple-700",
    delivered: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${colors[status]}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}