import Link from "next/link";
import { SearchX } from "lucide-react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center rounded-2xl border bg-white py-20 shadow-sm">
        <SearchX size={72} className="text-gray-300" />

        <h2 className="mt-6 text-3xl font-bold">No Products Found</h2>

        <p className="mt-3 text-center text-gray-500">
          We couldn't find any products matching your search.
        </p>

        <Link
          href="/products"
          className="mt-8 rounded-xl bg-amber-600 px-6 py-3 text-white hover:bg-amber-700"
        >
          Browse All Products
        </Link>
      </section>
    );
  }
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

// import ProductCard from "./ProductCard";
// import { products } from "@/data/products";

// export default function ProductGrid() {
//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//       {products.map((product) => (
//         <ProductCard
//           key={product.id}
//           id={product.id}
//           name={product.name}
//           price={product.price}
//           image={product.image}
//         />
//       ))}

//     </section>
//   );
// }
