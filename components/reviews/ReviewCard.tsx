import { Review } from "@/types/review";
import RatingStars from "./RatingStars";

type Props = {
  review: Review;
};

export default function ReviewCard({
  review,
}: Props) {
  return (
    <div className="rounded-xl border p-5">

      <div className="flex items-center justify-between">

        <h3 className="font-semibold">
          {review.user}
        </h3>

        <RatingStars rating={review.rating} />

      </div>

      <p className="mt-4 text-gray-600">
        {review.comment}
      </p>

      <p className="mt-3 text-sm text-gray-400">
        {review.date}
      </p>

    </div>
  );
}