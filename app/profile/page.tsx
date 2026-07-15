"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Button from "@/components/ui/Button";

export default function ProfilePage() {
  const router = useRouter();

  const { user, logout } = useAuth();

  if (!user) {
  return (
    <main className="mx-auto max-w-xl py-20 text-center">

      <h1 className="text-3xl font-bold">
        Please login first
      </h1>

      <Link
        href="/login"
        className="mt-8 inline-block rounded-xl bg-amber-600 px-6 py-3 text-white"
      >
        Go to Login
      </Link>

    </main>
  );
}

  return (
    <main className="mx-auto max-w-xl py-20">

      <div className="rounded-2xl border bg-white p-8 shadow">

        <h1 className="mb-6 text-3xl font-bold">
          My Profile
        </h1>

        <p>
          <strong>Name:</strong> {user.name}
        </p>

        <p className="mt-3">
          <strong>Email:</strong> {user.email}
        </p>

        <Button
          className="mt-8"
          onClick={() => {
            logout();
            router.push("/");
          }}
        >
          Logout
        </Button>

      </div>

    </main>
  );
}