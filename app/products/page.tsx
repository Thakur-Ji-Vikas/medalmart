"use client";

import { useMemo, useState } from "react";

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

  // Filter products
  const filteredProducts = useMemo(() => {

    return products.filter((product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;

    });

  }, [search, category]);

  return (
    <main className="container mx-auto px-6 py-10">

      <ProductHeader />

      {/* Filters */}

      <div className="my-8 grid gap-4 md:grid-cols-2">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />

      </div>

      {/* Product List */}

      <ProductGrid
        products={filteredProducts}
      />

    </main>
  );
}