import { Star } from "lucide-react";

type Props = {
  rating: number;
};

export default function RatingStars({
  rating,
}: Props) {
  return (
    <div className="flex gap-1">

      {[1, 2, 3, 4, 5].map((star) => (

        <Star
          key={star}
          size={18}
          className={
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }
        />

      ))}

    </div>
  );
}