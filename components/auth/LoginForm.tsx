"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import AuthCard from "./AuthCard";
import { useAuth } from "@/hooks/useAuth";

export default function LoginForm() {
  const router = useRouter();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    login({
      id: 1,
      name: "Vikas",
      email,
    });

    router.push("/profile");
  }

  return (
    <AuthCard title="Login">

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full rounded-xl border p-3"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full rounded-xl border p-3"
          required
        />

        <Button
          type="submit"
          className="w-full"
        >
          Login
        </Button>

      </form>

    </AuthCard>
  );
}