type AuthCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function AuthCard({
  title,
  children,
}: AuthCardProps) {
  return (
    <div className="mx-auto max-w-md rounded-2xl border bg-white p-8 shadow">

      <h1 className="mb-8 text-center text-3xl font-bold">
        {title}
      </h1>

      {children}

    </div>
  );
}