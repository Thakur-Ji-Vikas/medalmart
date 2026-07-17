"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useAuth } from "@/hooks/useAuth";

export default function ProfilePage() {

  // Logged-in user
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <main className="mx-auto max-w-5xl px-6 py-12">

        <h1 className="text-4xl font-bold">
          My Profile
        </h1>

        <div className="mt-8 rounded-xl border p-6">

          <p>
            <strong>Name:</strong> {user?.name}
          </p>

          <p className="mt-3">
            <strong>Email:</strong> {user?.email}
          </p>

        </div>

      </main>
    </ProtectedRoute>
  );
}