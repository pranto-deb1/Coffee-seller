import React from "react";
import { motion } from "framer-motion";

const images = [
  "/assets/chocolate-croissant.jpg",
  "/assets/espresso.jpg",
  "/assets/iced-coffee.jpg",
  "/assets/latte-art.png",
  "/assets/pastries.jpg",
];

const InspirationGallery = () => {
  // কন্টেইনার ভেরিয়েন্ট যা চাইল্ড এলিমেন্টগুলোকে একের পর এক ট্রিগার করবে
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // প্রতিটি ইমেজের মাঝে ০.১ সেকেন্ড গ্যাপ
      },
    },
  };

  // প্রতিটি ইমেজ আইটেমের জন্য ভেরিয়েন্ট
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    },
  };

  return (
    <section className="w-full mb-1">
      <div className="">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1"
        >
          {images.map((img, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group relative overflow-hidden h-64 w-full"
            >
              {/* Overlay - হোভার করলে হালকা হয়ে যাবে */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10 pointer-events-none" />
              
              <motion.img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Instagram-style Hover Effect (Optional) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="text-white text-sm font-medium border border-white px-4 py-2 bg-black/20 backdrop-blur-sm">
                  View Story
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InspirationGallery;