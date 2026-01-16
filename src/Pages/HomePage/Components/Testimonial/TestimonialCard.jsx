import { Star, Quote } from "lucide-react";

const TestimonialCard = ({ name, role, content, rating, avatarUrl }) => {
  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300 h-full flex flex-col">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <img
            src={avatarUrl}
            alt={name}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
          />
          <div>
            <h4 className="font-serif font-semibold text-card-foreground text-lg">
              {name}
            </h4>
            <p className="text-muted-foreground text-sm">{role}</p>
          </div>
        </div>
        <Quote className="w-8 h-8 md:w-10 md:h-10 text-gold fill-current opacity-80" />
      </div>

      <p className="text-card-foreground/80 leading-relaxed flex-grow mb-6">
        {content}
      </p>

      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "text-gold fill-current"
                : "text-muted-foreground/30"
            }`}
          />
        ))}
        <span className="text-gold font-medium ml-2">({rating * 2})</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
