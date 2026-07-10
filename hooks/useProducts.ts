"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";

export function useProducts() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return {
    search,
    setSearch,
    category,
    setCategory,
    filteredProducts,
  };
}