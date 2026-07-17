"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert("Password reset email will be sent from the Django backend.");

    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <div>
        <label className="mb-2 block font-medium">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border p-3 outline-none focus:border-amber-500"
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Send Reset Link
      </Button>

      <p className="text-center text-sm">
        Remember your password?{" "}
        <Link
          href="/login"
          className="text-amber-600 hover:underline"
        >
          Login
        </Link>
      </p>

    </form>
  );
}