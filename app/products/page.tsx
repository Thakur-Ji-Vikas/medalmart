"use client";

import ProductHeader from "@/components/products/ProductHeader";
import FilterBar from "@/components/products/FilterBar";
import ProductGrid from "@/components/products/ProductGrid";
import { useProducts } from "@/hooks/useProducts";

export default function ProductsPage() {
  const {
    search,
    setSearch,
    category,
    setCategory,
    filteredProducts,
  } = useProducts();

  return (
    <main className="container mx-auto px-6 py-10">
      <ProductHeader />

      <FilterBar
        search={search}
        category={category}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
      />

      <ProductGrid products={filteredProducts} />
    </main>
  );
}





// import ProductHeader from "@/components/products/ProductHeader";
// import FilterBar from "@/components/products/FilterBar";
// import ProductGrid from "@/components/products/ProductGrid";

// export default function ProductsPage() {
//   return (
//     <main className="container mx-auto px-6 py-10">
//       <ProductHeader />
//       <FilterBar />
//       <ProductGrid />
//     </main>
//   );
// }