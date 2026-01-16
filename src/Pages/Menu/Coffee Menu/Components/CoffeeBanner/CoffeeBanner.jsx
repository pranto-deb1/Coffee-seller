import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const CoffeeBanner = () => {
  return (
    <div
      className="
        relative 
        w-full 
        max-w-7xl 
        mx-auto 
        min-h-[420px]
        sm:min-h-[500px]
        md:min-h-[600px]
        bg-cover 
        bg-center 
        flex 
        items-center
        justify-center
        md:justify-end
        my-8
        rounded-lg
      "
      style={{
        backgroundImage: `url('/assets/cafe-scene.jpg')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute rounded-lg inset-0 bg-gradient-to-r from-black/30 via-black/60 to-black/90"></div>

      {/* Content */}
      <div
        className="
          relative 
          z-10 
          w-full 
          md:w-1/2 
          px-6 
          sm:px-10 
          md:px-16 
          text-white
          text-center
          md:text-left
        "
      >
        <h1
          className="
            text-3xl 
            sm:text-4xl 
            md:text-5xl 
            lg:text-6xl 
            font-serif 
            font-bold 
            mb-4 
            sm:mb-6 
            leading-tight
          "
        >
          Indulge in the <span className="italic">Perfect</span> Cup of Coffee
          Today!
        </h1>

        <p
          className="
            text-gray-300 
            text-base 
            sm:text-lg 
            md:text-xl 
            mb-6 
            sm:mb-8 
            font-sans 
            font-light 
            max-w-md 
            mx-auto 
            md:mx-0
          "
        >
          Experience the warmth of Cafeteria TNC and discover your new favorite
          coffee blend.
        </p>

        <motion.a
          href="#book"
          className="btn-outline-light inline-flex items-center gap-2 py-4 px-6 text-sm sm:text-base text-white border-2 rounded-4xl border-white"
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }} // হোভার ইফেক্ট
          whileTap={{ scale: 0.95 }} // ক্লিক ইফেক্ট
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Order Now
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default CoffeeBanner;
