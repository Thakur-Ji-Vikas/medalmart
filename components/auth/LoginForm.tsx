"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert("Login API will be connected in Django backend.");

    setEmail("");
    setPassword("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email */}
      <div>
        <label className="mb-2 block font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border p-3 outline-none focus:border-amber-500"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label className="mb-2 block font-medium">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border p-3 outline-none focus:border-amber-500"
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Login
      </Button>

      <div className="flex justify-between text-sm">
        <Link
          href="/forgot-password"
          className="text-amber-600 hover:underline"
        >
          Forgot Password?
        </Link>

        <Link
          href="/register"
          className="text-amber-600 hover:underline"
        >
          Create Account
        </Link>
      </div>
    </form>
  );
}