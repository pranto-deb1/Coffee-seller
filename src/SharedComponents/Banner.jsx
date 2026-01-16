import React from "react";
import { motion } from "framer-motion";

const Banner = ({ content }) => {
  // টাইটেল এবং প্যারাগ্রাফের জন্য কমন অ্যানিমেশন সেটিংস
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[url('/assets/coffee-hero-bg.jpg')] bg-cover h-100 relative bg-center bg-no-repeat overflow-hidden">
      {/* Overlay with Fade-in effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="inset-0 bg-black/50 w-full h-full z-0 absolute"
      ></motion.div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-16 z-20 absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {/* Animated Title */}
        <motion.h2
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-serif italic text-3xl md:text-4xl text-white lg:text-5xl mb-4 md:mb-6 font-semibold"
        >
          {content.title}
        </motion.h2>

        {/* Animated Description with a slight delay */}
        <motion.p
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }} // টাইটেল আসার কিছুক্ষণ পর ডেসক্রিপশন আসবে
          className="text-lg text-white mt-4"
        >
          {content.description}
        </motion.p>
      </div>
    </div>
  );
};

export default Banner;
