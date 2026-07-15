"use client";

export default function PaymentMethod() {
  return (
    <section className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">

      {/* Section Heading */}
      <h2 className="mb-6 text-2xl font-bold">
        Payment Method
      </h2>

      {/* Cash on Delivery */}
      <label className="mb-4 flex cursor-pointer items-center gap-3 rounded-lg border p-4 hover:border-amber-500">

        <input
          type="radio"
          name="payment"
          defaultChecked
        />

        <div>
          <p className="font-semibold">
            Cash on Delivery
          </p>

          <p className="text-sm text-gray-500">
            Pay when your order is delivered.
          </p>
        </div>

      </label>

      {/* UPI */}
      <label className="mb-4 flex cursor-pointer items-center gap-3 rounded-lg border p-4 hover:border-amber-500">

        <input
          type="radio"
          name="payment"
        />

        <div>
          <p className="font-semibold">
            UPI
          </p>

          <p className="text-sm text-gray-500">
            Google Pay, PhonePe, Paytm and more.
          </p>
        </div>

      </label>

      {/* Card */}
      <label className="mb-4 flex cursor-pointer items-center gap-3 rounded-lg border p-4 hover:border-amber-500">

        <input
          type="radio"
          name="payment"
        />

        <div>
          <p className="font-semibold">
            Credit / Debit Card
          </p>

          <p className="text-sm text-gray-500">
            Visa, MasterCard, RuPay.
          </p>
        </div>

      </label>

      {/* Net Banking */}
      <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-4 hover:border-amber-500">

        <input
          type="radio"
          name="payment"
        />

        <div>
          <p className="font-semibold">
            Net Banking
          </p>

          <p className="text-sm text-gray-500">
            Pay directly from your bank account.
          </p>
        </div>

      </label>

    </section>
  );
}