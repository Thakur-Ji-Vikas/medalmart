// type Props = {
//   params: {
//     id: string;
//   };
// };

// export default function ProductDetails({ params }: Props) {
//   return (
//     <main className="max-w-5xl mx-auto px-6 py-12">
//       <h1 className="text-4xl font-bold">
//         Product #{params.id}
//       </h1>

//       <p className="mt-4 text-gray-600">
//         This is the product details page.
//       </p>
//     </main>
//   );
// }

import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ReviewList from "@/components/reviews/ReviewList";
import ReviewForm from "@/components/reviews/ReviewForm";
import RatingStars from "@/components/reviews/RatingStars";
import Button from "@/components/ui/Button";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
  }

  const totalReviews = product.reviews.length;

  const averageRating =
    totalReviews === 0
      ? 0
      : product.reviews.reduce((sum, review) => sum + review.rating, 0) /
        totalReviews;

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-2xl shadow p-8 flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={450}
            height={450}
            className="object-contain"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>

          <p className="mt-4 text-amber-600 text-3xl font-bold">
            ₹{product.price}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <RatingStars rating={Math.round(averageRating)} />

            <span className="text-gray-600">({totalReviews} reviews)</span>
          </div>
          <p className="mt-6 text-gray-600 leading-8">{product.description}</p>

          <Button className="mt-10">Add to Cart</Button>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-bold">Customer Reviews</h2>

        <ReviewList reviews={product.reviews} />

        <ReviewForm />
      </section>
    </main>
  );
}
