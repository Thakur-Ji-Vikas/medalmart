"use client";

import { useSearch } from "@/hooks/useSearch";

export default function SortSelect() {
  // Search state
  const { filters, updateFilters } = useSearch();

  return (
    <select
      value={filters.sort}
      onChange={(e) =>
        updateFilters({
          sort: e.target.value,
        })
      }
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