import { Star } from "lucide-react";

const StarRating = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: maxRating }, (_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < rating
              ? "fill-coffee-amber text-coffee-amber"
              : "fill-transparent text-muted-foreground/40"
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
