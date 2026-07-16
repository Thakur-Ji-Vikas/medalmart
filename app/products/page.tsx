"use client";

import { useMemo, useState } from "react";
import SortSelect from "@/components/products/SortSelect";
import ProductHeader from "@/components/products/ProductHeader";
import ProductGrid from "@/components/products/ProductGrid";
import SearchBar from "@/components/products/SearchBar";
import CategoryFilter from "@/components/products/CategoryFilter";

import { products } from "@/data/products";

export default function ProductsPage() {
  // Search text
  const [search, setSearch] = useState("");

  // Selected category
  const [category, setCategory] = useState("All");
  // Current sorting option
  const [sort, setSort] = useState("default");

  // // Filter products
  // const filteredProducts = useMemo(() => {
  //   return products.filter((product) => {
  //     const matchesSearch = product.name
  //       .toLowerCase()
  //       .includes(search.toLowerCase());

  //     const matchesCategory =
  //       category === "All" || product.category === category;

  //     return matchesSearch && matchesCategory;
  //   });
  // }, [search, category]);
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    switch (sort) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return filtered;
  }, [search, category, sort]);

  return (
    <main className="container mx-auto px-6 py-10">
      <ProductHeader />

      {/* Filters */}

      <div className="my-8 grid gap-4 md:grid-cols-3">
        <SearchBar search={search} setSearch={setSearch} />

        <CategoryFilter category={category} setCategory={setCategory} />
        <SortSelect sort={sort} setSort={setSort} />
      </div>

      {/* Clear filter */}
      <div className="mt-4">
        <button
          onClick={() => {
            setSearch("");
            setCategory("All");
            setSort("default");
          }}
          className="rounded-xl border px-5 py-2 transition hover:bg-gray-100"
        >
          Clear Filters
        </button>
      </div>

      {/* Product List */}

      <ProductGrid products={filteredProducts} />
    </main>
  );
}
