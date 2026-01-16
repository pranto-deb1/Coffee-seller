import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-50 flex flex-col items-center text-center pb-8">
      {/* Product Image Area with light background */}
      <div className="w-full bg-[#f3e9dc]  mb-6 flex justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Details */}
      <div className="px-4">
        <h2 className="text-xl font-serif italic font-bold text-[#2a1a17] mb-3">
          {product.name}
        </h2>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>
        <p className="text-lg font-bold text-[#2a1a17]">
          $ {product.price} USD
        </p>
      </div>
    </div>
  );
};

export default ProductCard;