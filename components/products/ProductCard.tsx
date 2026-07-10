import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
}: ProductCardProps) {
  return (
  <Link href={`/products/${id}`}>
    <div className="rounded-xl border bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="w-full h-60 object-contain p-6"
      />

      <div className="p-5">
        <h3 className="text-2xl font-semibold">{name}</h3>

        <p className="text-amber-600 font-bold text-xl mt-2">
          ₹{price}
        </p>

        <button className="mt-5 w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition">
          Add to Cart
        </button>
      </div>
    </div>
  </Link>
  );
}