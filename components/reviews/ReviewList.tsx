import { Review } from "@/types/review";
import ReviewCard from "./ReviewCard";

type Props = {
  reviews: Review[];
};

export default function ReviewList({
  reviews,
}: Props) {
  if (reviews.length === 0) {
    return (
      <p className="text-gray-500">
        No reviews yet.
      </p>
    );
  }

  return (
    <div className="space-y-5">

      {reviews.map((review) => (

        <ReviewCard
          key={review.id}
          review={review}
        />

      ))}

    </div>
  );
}