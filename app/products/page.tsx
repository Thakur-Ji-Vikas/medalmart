import ProductHeader from "@/components/products/ProductHeader";
import FilterBar from "@/components/products/FilterBar";
import ProductGrid from "@/components/products/ProductGrid";

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-6 py-10">
      <ProductHeader />
      <FilterBar />
      <ProductGrid />
    </main>
  );
}