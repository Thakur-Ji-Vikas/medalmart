"use client";
import { Heart } from "lucide-react";
import { useWishlist } from "@/hooks/useWishlist";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/types/product";
import Button from "@/components/ui/Button";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  // Extract values from the product object
  const { id, name, price, image } = product;

  const { addToCart } = useCart();

  // Wishlist functions
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();

  const wishlisted = isWishlisted(id);

  return (
    <div className="rounded-2xl border bg-white shadow-sm transition hover:shadow-lg">
      <Link href={`/products/${id}`}>
        <div className="relative h-72 bg-white">
          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();

              if (!product) return;

              if (wishlisted) {
                removeFromWishlist(product.id);
              } else {
                addToWishlist(product);
              }
            }}
            className="absolute top-4 right-4 z-10 rounded-full bg-white p-2 shadow-md transition hover:scale-110"
          >
            <Heart
              size={22}
              className={
                wishlisted ? "fill-red-500 text-red-500" : "text-gray-500"
              }
            />
          </button>

          <Image src={image} alt={name} fill className="object-contain p-6" />
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/products/${id}`}>
          <h3 className="text-2xl font-semibold hover:text-amber-600">
            {name}
          </h3>
        </Link>

        <p className="mt-3 text-2xl font-bold text-amber-600">₹{price}</p>

        {/* <button
          onClick={() => product && addToCart(product)}
          className="mt-6 w-full rounded-xl bg-amber-600 py-3 text-white font-semibold hover:bg-amber-700"
        >
          Add to Cart
        </button> */}
        <Button onClick={() => addToCart(product)} className="mt-6 w-full">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

// import Link from "next/link";
// import Image from "next/image";

// type ProductCardProps = {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
// };

// export default function ProductCard({
//   id,
//   name,
//   price,
//   image,
// }: ProductCardProps) {
//   return (
//   <Link href={`/products/${id}`}>
//     <div className="rounded-xl border bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
//       <Image
//         src={image}
//         alt={name}
//         width={400}
//         height={300}
//         className="w-full h-60 object-contain p-6"
//       />

//       <div className="p-5">
//         <h3 className="text-2xl font-semibold">{name}</h3>

//         <p className="text-amber-600 font-bold text-xl mt-2">
//           ₹{price}
//         </p>

//         <button className="mt-5 w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   </Link>
//   );
// }
