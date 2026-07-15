"use client";
import Image from "next/image";
import Link from "next/link";

import { products } from "@/data/products";

// Show only products marked as featured
const featuredProducts = products.filter(
  (product) => product.featured
);

export default function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Featured Products
          </h2>

          <p className="mt-3 text-gray-500">
            Popular products loved by schools, colleges and companies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* {products.map((product) => (

            <div
              key={product.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            > */} 
            {/* replace the above command with this below one */}
            {featuredProducts.map((product) => (

  <Link
    key={product.id}
    href={`/products/${product.id}`} 
    >
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
     


              <div className="flex h-72 items-center justify-center bg-white">

                <Image
                  src={product.image}
                  alt={product.name}
                  width={220}
                  height={220}
                  className="object-contain"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {product.name}
                </h3>

                <p className="mt-3 text-2xl font-bold text-yellow-600">
                  {product.price}
                </p>

                <button
                onClick={(e) => {
                  // Prevent the parent Link from navigating
                  e.preventDefault();

                  // We'll connect this to CartContext next. 
                }}
                  className="mt-6 w-full rounded-xl bg-yellow-600 py-3 font-semibold text-white transition hover:bg-yellow-700"
                >
                  Add to Cart
                </button>

              </div>

            </div>
            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}