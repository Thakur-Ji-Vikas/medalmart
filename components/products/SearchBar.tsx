"use client";

import { useSearch } from "@/hooks/useSearch";

export default function SearchBar() {
  // Search state
  const { filters, updateFilters } = useSearch();

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={filters.search}
      onChange={(e) =>
        updateFilters({
          search: e.target.value,
        })
      }
      className="w-full rounded-xl border p-3 outline-none focus:border-amber-500"
    />
  );
}