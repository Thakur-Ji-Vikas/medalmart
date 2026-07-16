"use client";

type SortSelectProps = {
  sort: string;
  setSort: (value: string) => void;
};

export default function SortSelect({
  sort,
  setSort,
}: SortSelectProps) {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="rounded-xl border p-3"
    >
      <option value="default">Default</option>
      <option value="price-low">Price: Low → High</option>
      <option value="price-high">Price: High → Low</option>
      <option value="name-asc">Name: A → Z</option>
      <option value="name-desc">Name: Z → A</option>
    </select>
  );
}