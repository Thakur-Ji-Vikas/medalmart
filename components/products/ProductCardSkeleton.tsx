export default function ProductCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border bg-white p-4 shadow">
      <div className="h-56 rounded-xl bg-gray-200" />

      <div className="mt-4 h-6 w-3/4 rounded bg-gray-200" />

      <div className="mt-3 h-5 w-1/2 rounded bg-gray-200" />

      <div className="mt-6 h-10 rounded-xl bg-gray-200" />
    </div>
  );
}