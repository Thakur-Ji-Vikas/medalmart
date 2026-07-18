import { notFound } from "next/navigation";

import { orders } from "@/data/orders";
import OrderDetails from "@/components/orders/OrderDetails";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OrderDetailsPage({
  params,
}: Props) {

  const { id } = await params;

  const order = orders.find(
    (item) => item.id === Number(id)
  );

  if (!order) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">

      <OrderDetails order={order} />

    </main>
  );
}