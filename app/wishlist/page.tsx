"use client";

import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/hooks/useWishlist";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">
          My Wishlist
        </h1>

        <p className="text-gray-500">
          Your wishlist is empty.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-8">
        My Wishlist
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {wishlist.map((product) => (

          <div
            key={product.id}
            className="rounded-xl border p-6 shadow-sm"
          >

            <Link href={`/products/${product.id}`}>

              <Image
                src={product.image}
                alt={product.name}
                width={220}
                height={220}
                className="mx-auto object-contain"
              />

              <h2 className="mt-6 text-xl font-semibold">
                {product.name}
              </h2>

            </Link>

            <p className="mt-3 text-xl font-bold text-amber-600">
              ₹{product.price}
            </p>

            <button
              onClick={() => removeFromWishlist(product.id)}
              className="mt-6 w-full rounded-xl bg-red-500 py-3 text-white hover:bg-red-600"
            >
              Remove
            </button>

          </div>

        ))}

      </div>

    </main>
  );
}