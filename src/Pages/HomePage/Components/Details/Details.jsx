import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import cafeScene from "/assets/cafe-scene2.jpg";

const stats = [
  { number: "20", suffix: "+", label: "Years Experience" },
  { number: "50", suffix: "+", label: "Menu Items" },
  { number: "90", suffix: "+", label: "5 Star Reviews" },
];

const OurStory = () => {
  // কনটেইনারের জন্য ভ্যারিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // প্রতিটি চাইল্ড এলিমেন্ট ০.২ সেকেন্ড পর পর আসবে
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // x এর বদলে y ব্যবহার করলে পড়ার সময় আরামদায়ক লাগে
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="min-h-screen bg-background py-12 md:pt-20 lg:pt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-2 lg:order-1"
          >
            <motion.h2
              variants={itemVariants}
              className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl italic text-chokolet mb-6 md:mb-8"
            >
              Our story
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 md:mb-10 max-w-xl"
            >
              Coffee is a story of family, tradition, and craftsmanship. Rooted
              in artisanal heritage, each batch begins with carefully sourced
              green beans and is transformed through meticulous roasting—where
              time, temperature, and technique are perfected.
              <br /> The result is a sensory journey in every cup: rich aromas,
              layered flavors, and nuanced notes that reflect both our family
              values and our devotion to the art of coffee.
            </motion.p>

            {/* Book a Table Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border-2 border-chokolet text-chokolet rounded-full font-body font-medium text-sm sm:text-base hover:bg-chokolet hover:text-white transition-colors duration-300 mb-10 md:mb-14"
              >
                View Our Full Story
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 sm:gap-12 lg:gap-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants} // আলাদা ভ্যারিয়েন্টের বদলে একই সিকোয়েন্স ব্যবহার করা হয়েছে
                  className="flex flex-col"
                >
                  <span className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-chokolet">
                    {stat.number}
                    <span className="text-chokolet">{stat.suffix}</span>
                  </span>
                  <span className="font-heading text-sm sm:text-base font-semibold text-chokolet italic mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl overflow-hidden shadow-2xl z-10 relative"
              >
                <img
                  src={cafeScene}
                  alt="Cozy cafe scene"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
              </motion.div>
              {/* Decorative Background Element */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-4 -right-4 w-full h-full border-2 border-chokolet/20 rounded-2xl -z-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
