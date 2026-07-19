"use client";

import { useSearch } from "@/hooks/useSearch";

const categories = [
  "All",
  "Trophies",
  "Medals",
  "Shields",
  "Corporate Awards",
];

export default function CategoryFilter() {
  // Search state
  const { filters, updateFilters } = useSearch();

  return (
    <select
      value={filters.category}
      onChange={(e) =>
        updateFilters({
          category: e.target.value,
        })
      }
      className="rounded-xl border p-3"
    >
      {categories.map((item) => (
        <option
          key={item}
          value={item}
        >
          {item}
        </option>
      ))}
    </select>
  );
}