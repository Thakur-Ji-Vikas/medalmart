type Props = {
  title: string;
  value: string | number;
};

export default function DashboardCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-gray-500">
        {title}
      </h3>

      <p className="mt-4 text-4xl font-bold">
        {value}
      </p>
    </div>
  );
}