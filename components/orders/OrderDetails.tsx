import { Order } from "@/types/order";
import OrderStatusBadge from "./OrderStatusBadge";

type OrderDetailsProps = {
  order: Order;
};

export default function OrderDetails({
  order,
}: OrderDetailsProps) {
  return (
    <div className="space-y-8">

      {/* Order Header */}
      <section className="rounded-2xl border bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">

          <h1 className="text-3xl font-bold">
            Order #{order.id}
          </h1>

          <OrderStatusBadge status={order.status} />

        </div>

        <p className="mt-4 text-gray-500">
          Ordered on {order.createdAt}
        </p>

      </section>

      {/* Address */}
      <section className="rounded-2xl border bg-white p-6 shadow-sm">

        <h2 className="mb-4 text-2xl font-semibold">
          Delivery Address
        </h2>

        <p>{order.address.fullName}</p>
        <p>{order.address.phone}</p>
        <p>{order.address.address}</p>
        <p>
          {order.address.city}, {order.address.state}
        </p>
        <p>{order.address.pinCode}</p>

      </section>

      {/* Order Items */}
      <section className="rounded-2xl border bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-2xl font-semibold">
          Ordered Items
        </h2>

        <div className="space-y-4">

          {order.items.map((item) => (

            <div
              key={item.id}
              className="flex justify-between border-b pb-3"
            >

              <div>
                <p className="font-semibold">
                  {item.name}
                </p>

                <p className="text-gray-500">
                  Qty: {item.quantity}
                </p>
              </div>

              <p className="font-semibold">
                ₹{item.price * item.quantity}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Summary */}
      <section className="rounded-2xl border bg-white p-6 shadow-sm">

        <h2 className="mb-4 text-2xl font-semibold">
          Order Summary
        </h2>

        <div className="space-y-2">

          <div className="flex justify-between">
            <span>Payment</span>
            <span>{order.paymentMethod}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{order.shippingMethod}</span>
          </div>

          <hr />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>₹{order.total}</span>
          </div>

        </div>

      </section>

    </div>
  );
}