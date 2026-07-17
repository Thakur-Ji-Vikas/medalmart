"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Registration API will be connected in Django backend.");

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Name */}
      <div>
        <label className="mb-2 block font-medium">
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border p-3 outline-none focus:border-amber-500"
          required
        />
      </div>

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
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border p-3 outline-none focus:border-amber-500"
          required
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label className="mb-2 block font-medium">
          Confirm Password
        </label>

        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full rounded-lg border p-3 outline-none focus:border-amber-500"
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Create Account
      </Button>

      <p className="text-center text-sm">
        Already have an account?{" "}
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