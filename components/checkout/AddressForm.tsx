"use client";

import { ChangeEvent } from "react";
import { useCheckout } from "@/hooks/useCheckout";

export default function AddressForm() {

  // Checkout state
  const { checkout, updateCheckout } = useCheckout();

  // Current address
  const { address } = checkout;

  // Handle input change
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    updateCheckout({
      address: {
        ...address,
        [e.target.name]: e.target.value,
      },
    });
  }

  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold">
        Delivery Address
      </h2>

      <div className="grid gap-4">

        {/* Full Name */}
        <input
          name="fullName"
          value={address.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-amber-500"
        />

        {/* Phone */}
        <input
          name="phone"
          value={address.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-amber-500"
        />

        {/* Address */}
        <input
          name="address"
          value={address.address}
          onChange={handleChange}
          placeholder="Street Address"
          className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-amber-500"
        />

        {/* City */}
        <input
          name="city"
          value={address.city}
          onChange={handleChange}
          placeholder="City"
          className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-amber-500"
        />

        {/* State */}
        <input
          name="state"
          value={address.state}
          onChange={handleChange}
          placeholder="State"
          className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-amber-500"
        />

        {/* PIN Code */}
        <input
          name="pinCode"
          value={address.pinCode}
          onChange={handleChange}
          placeholder="PIN Code"
          className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-amber-500"
        />

      </div>

    </section>
  );
}