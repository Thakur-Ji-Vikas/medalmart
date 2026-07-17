import { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AuthCard({
  title,
  subtitle,
  children,
}: AuthCardProps) {
  return (
    <div className="mx-auto mt-20 w-full max-w-md rounded-2xl border bg-white p-8 shadow-lg">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center">
        {title}
      </h1>

      <p className="mt-2 text-center text-gray-500">
        {subtitle}
      </p>

      {/* Form */}
      <div className="mt-8">
        {children}
      </div>

    </div>
  );
}