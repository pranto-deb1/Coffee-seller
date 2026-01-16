import React from "react";
import StarRating from "./StarRating";

const MenuCard = ({ image, name, description, price, rating }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col items-center p-4 text-center sm:p-5">
        <h3 className="font-display text-lg font-semibold text-coffee-brown sm:text-xl">
          {name}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-sm text-coffee-text sm:mt-2">
          {description}
        </p>

        <p className="mt-3 font-display text-xl font-bold text-coffee-price sm:text-2xl">
          {price}
        </p>

        <div className="mt-2">
          <StarRating rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
