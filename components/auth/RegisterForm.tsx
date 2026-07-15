"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import AuthCard from "./AuthCard";

export default function RegisterForm() {

  const router = useRouter();

  const [name,setName]=useState("");

  const [email,setEmail]=useState("");

  const [password,setPassword]=useState("");

  function handleSubmit(e:React.FormEvent){

    e.preventDefault();

    alert("Registration UI Completed");

    router.push("/login");

  }

  return(

    <AuthCard title="Register">

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <input
          className="w-full rounded-xl border p-3"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          className="w-full rounded-xl border p-3"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full rounded-xl border p-3"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <Button
          type="submit"
          className="w-full"
        >
          Register
        </Button>

      </form>

    </AuthCard>

  );
}