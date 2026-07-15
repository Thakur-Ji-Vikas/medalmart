"use client";

export default function AddressForm() {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      {/* Section Title */}
      <h2 className="mb-6 text-2xl font-bold">
        Shipping Address
      </h2>

      {/* Full Name */}
      <div className="mb-4">
        <label className="mb-2 block font-medium">
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full rounded-lg border px-4 py-3 outline-none focus:border-amber-500"
        />
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label className="mb-2 block font-medium">
          Phone Number
        </label>

        <input
          type="tel"
          placeholder="Enter your phone number"
          className="w-full rounded-lg border px-4 py-3 outline-none focus:border-amber-500"
        />
      </div>

      {/* Street Address */}
      <div className="mb-4">
        <label className="mb-2 block font-medium">
          Street Address
        </label>

        <textarea
          rows={4}
          placeholder="House No., Street, Area..."
          className="w-full rounded-lg border px-4 py-3 outline-none focus:border-amber-500"
        />
      </div>

      {/* City & State */}
      <div className="grid gap-4 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-medium">
            City
          </label>

          <input
            type="text"
            placeholder="City"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-amber-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            State
          </label>

          <input
            type="text"
            placeholder="State"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-amber-500"
          />
        </div>

      </div>

      {/* Pincode */}
      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Pincode
        </label>

        <input
          type="text"
          placeholder="Enter pincode"
          className="w-full rounded-lg border px-4 py-3 outline-none focus:border-amber-500"
        />
      </div>

    </section>
  );
}