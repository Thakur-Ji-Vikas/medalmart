import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-500">
          No products found.
        </h2>

        <p className="mt-2 text-gray-400">Try another search or category.</p>
      </div>
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
