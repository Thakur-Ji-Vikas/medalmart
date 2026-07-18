import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-6">

      <div className="rounded-2xl border bg-white p-10 text-center shadow-lg">

        {/* Success Icon */}
        <CheckCircle
          size={80}
          className="mx-auto text-green-500"
        />

        <h1 className="mt-6 text-4xl font-bold">
          Order Placed Successfully!
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for shopping with MedalMart.
        </p>

        <p className="mt-2 text-gray-600">
          Your order has been received and is being processed.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <Link
            href="/orders"
            className="rounded-xl bg-amber-600 px-6 py-3 text-white hover:bg-amber-700"
          >
            View My Orders
          </Link>

          <Link
            href="/products"
            className="rounded-xl border px-6 py-3 hover:bg-gray-100"
          >
            Continue Shopping
          </Link>

        </div>

      </div>

    </main>
  );
}