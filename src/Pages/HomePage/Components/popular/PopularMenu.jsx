import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion"; // Framer motion ইমপোর্ট করা হয়েছে
import MenuCard from "./MenuCard";
import mediumRoastImg from "/assets/886.jpg";
import lightRoastImg from "/assets/531.jpg";
import darkRoastImg from "/assets/2290.jpg";
import houseBlendImg from "/assets/2151913323.jpg";

const menuItems = [
  {
    id: 1,
    name: "Heritage Medium Roast",
    description: "Chocolate, almond, and a smooth balanced finish",
    price: "$14.00",
    rating: 5,
    image: mediumRoastImg,
  },
  {
    id: 2,
    name: "Single Origin Light Roast",
    description: "Bright acidity with citrus and floral notes",
    price: "$16.00",
    rating: 5,
    image: lightRoastImg,
  },
  {
    id: 3,
    name: "Signature Dark Roast",
    description: "Bold body with cocoa, spice, and low acidity",
    price: "$15.00",
    rating: 4,
    image: darkRoastImg,
  },
  {
    id: 4,
    name: "House Blend",
    description: "A smooth everyday coffee with caramel sweetness",
    price: "$13.50",
    rating: 4,
    image: houseBlendImg,
  },
];

const PopularMenu = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // অ্যানিমেশন ভেরিয়েন্টস
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section className="relative w-full px-4 py-12 sm:px-6 sm:py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center sm:mb-12"
        >
          <h2 className="font-bold text-3xl sm:text-3xl md:text-5xl lg:text-5xl italic text-chokolet mb-6 md:mb-8">
            Popular Coffee Roasts
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-coffee-text sm:mt-4 sm:text-base">
            Carefully hand-roasted coffees delivering rich aroma, balanced
            flavor, and a true artisanal experience in every cup.
          </p>
        </motion.div>

        {/* Menu Grid - Desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {menuItems.map((item) => (
            <motion.div key={item.id} variants={cardVariants}>
              <MenuCard {...item} />
            </motion.div>
          ))}
        </motion.div>

        {/* Menu Carousel - Mobile/Tablet */}
        <div className="relative md:hidden">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card p-2 shadow-card transition-all ${
              canScrollLeft
                ? "text-chokolet hover:bg-secondary"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card p-2 shadow-card transition-all ${
              canScrollRight
                ? "text-chokolet hover:bg-secondary"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <motion.div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="w-[260px] flex-shrink-0 snap-center sm:w-[280px]"
              >
                <MenuCard {...item} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
