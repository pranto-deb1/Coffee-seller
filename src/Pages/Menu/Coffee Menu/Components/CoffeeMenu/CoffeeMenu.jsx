import React from "react";
import { motion } from "framer-motion"; // Framer Motion ইম্পোর্ট করা হয়েছে
import CoffeeBanner from "../CoffeeBanner/CoffeeBanner";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import mediumRoastImg from "/assets/886.jpg";
import lightRoastImg from "/assets/531.jpg";
import darkRoastImg from "/assets/2290.jpg";
import houseBlendImg from "/assets/2151913323.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const CoffeeMenu = () => {
  const menuData = [
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
    {
      id: 5,
      name: "Heritage Medium Roast",
      description: "Chocolate, almond, and a smooth balanced finish",
      price: "$14.00",
      rating: 5,
      image: mediumRoastImg,
    },
    {
      id: 6,
      name: "Single Origin Light Roast",
      description: "Bright acidity with citrus and floral notes",
      price: "$16.00",
      rating: 5,
      image: lightRoastImg,
    },
    {
      id: 7,
      name: "Signature Dark Roast",
      description: "Bold body with cocoa, spice, and low acidity",
      price: "$15.00",
      rating: 4,
      image: darkRoastImg,
    },
    {
      id: 8,
      name: "House Blend",
      description: "A smooth everyday coffee with caramel sweetness",
      price: "$13.50",
      rating: 4,
      image: houseBlendImg,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-10 ">
      {/* প্রথম সেকশন: লোড হওয়ার সময় আসবে */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16"
      >
        {menuData.slice(0, 4).map((item) => (
          <CoffeeCard
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </motion.div>

      {/* ব্যানার সেকশন: স্ক্রল করলে আসবে */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="my-16"
      >
        <CoffeeBanner />
      </motion.div>

      {/* দ্বিতীয় সেকশন: স্ক্রল করে নিচে নামলে আসবে */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid mb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        {menuData.slice(0, 8).map((item) => (
          <CoffeeCard
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CoffeeMenu;
