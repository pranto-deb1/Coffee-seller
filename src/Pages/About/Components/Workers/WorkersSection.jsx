import React from "react";
import { motion } from "framer-motion";
import WorkerCard from "./WorkerCard";
import chefBrooklyn from "/assets/chef-brooklyn.jpg";
import chefAnnette from "/assets/chef-annette.jpg";
import chefWade from "/assets/chef-wade.jpg";
import chefDarrell from "/assets/chef-darrell.jpg";

const chefs = [
  {
    image: chefBrooklyn,
    name: "Brooklyn Simmons",
    role: "Head Chef",
  },
  {
    image: chefAnnette,
    name: "Annette Black",
    role: "Assistant Chef",
  },
  {
    image: chefWade,
    name: "Wade Warren",
    role: "Dessert Expert",
  },
  {
    image: chefDarrell,
    name: "Darrell Steward",
    role: "Barista",
  },
];

const WorkersSection = () => {
  // কন্টেইনার ভেরিয়েন্ট যা চাইল্ড কার্ডগুলোকে একে একে ট্রিগার করবে
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // প্রতিটি কার্ড ০.২ সেকেন্ড গ্যাপে আসবে
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-bold text-3xl sm:text-3xl md:text-5xl lg:text-5xl italic text-chokolet mb-6 md:mb-8">
            Meet the Roasters
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Meet our skilled roasters, crafting each coffee with precision, passion, and artisanal expertise.
          </p>
        </motion.div>

        {/* Chefs Grid with Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8"
        >
          {chefs.map((chef) => (
            // যেহেতু WorkerCard-এর ভেতরে আমরা অলরেডি motion এলিমেন্ট দিয়েছি,
            // এখানে এটি containerVariants-এর staggerChildren দ্বারা ট্রিগার হবে।
            <WorkerCard
              key={chef.name}
              image={chef.image}
              name={chef.name}
              role={chef.role}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkersSection;
