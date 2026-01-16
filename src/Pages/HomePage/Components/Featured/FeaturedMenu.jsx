import React from "react";
import { motion } from "framer-motion";
import MenuCard from "./MenuCard";
import espressoImg from "/assets/406619154_f476d4b2-5c51-473b-9fff-9bf602e7baaa-Picsart-BackgroundRemover.jpg";
import latteImg from "/assets/fragrant-coffee-beans-are-scattered-from-jar-rustic-tabletop-background-closeup-selective-focus-copy-space-banner.jpg";
import icedCoffeeImg from "/assets/269180885_11164365 (1).png";
import cappuccinoImg from "/assets/cappuccino.jpg";
import pastriesImg from "/assets/coffee-beans-top-view-background.jpg";

const menuItems = [
  { image: espressoImg, label: "Espresso" },
  { image: cappuccinoImg, label: "Cappuccino" },
  { image: latteImg, label: "Latte" },
  { image: icedCoffeeImg, label: "Iced Coffee" },
  { image: pastriesImg, label: "Pastries" },
];

const FeaturedMenu = () => {
  // কনটেইনারের জন্য অ্যানিমেশন ভ্যারিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // প্রতিটি মেনু কার্ড ০.২ সেকেন্ড ব্যবধানে আসবে
      },
    },
  };

  // প্রতিটি আইটেমের জন্য অ্যানিমেশন
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen bg-background py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="font-bold text-3xl sm:text-3xl md:text-5xl lg:text-5xl italic text-chokolet mb-6 md:mb-8">
          Our Signature Coffees
        </h2>
        <p className="section-subtitle">
          Indulge in the smooth elegance of our Cappuccino, where every sip is a
          journey into the heart of artisanal coffee-making.
        </p>
      </motion.div>

      {/* Menu Grid */}
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Left column */}
          <div className="flex flex-col gap-4 md:gap-5">
            <motion.div variants={itemVariants}>
              <MenuCard
                image={menuItems[0].image}
                className="aspect-square h-full"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <MenuCard
                image={menuItems[3].image}
                className="aspect-square h-full"
              />
            </motion.div>
          </div>

          {/* Center column */}
          <motion.div variants={itemVariants} className="flex items-stretch">
            <MenuCard
              image={menuItems[1].image}
              className="w-full h-full min-h-[400px] md:min-h-0"
            />
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col gap-4 md:gap-5">
            <motion.div variants={itemVariants} className="flex-1">
              <MenuCard
                image={menuItems[2].image}
                className="h-full min-h-[200px]"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="flex-1">
              <MenuCard
                image={menuItems[4].image}
                className="h-full min-h-[200px]"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedMenu;
