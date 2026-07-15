import { ReactNode } from "react";

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="text-3xl font-bold text-center">
          {title}
        </h1>

        <p className="mt-2 text-center text-gray-500">
          {subtitle}
        </p>

        <div className="mt-8">
          {children}
        </div>

      </div>

    </main>
  );
}