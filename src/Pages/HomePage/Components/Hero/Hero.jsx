import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion"; // Framer motion ইমপোর্ট করা হয়েছে
import coffeeHeroBg from "/assets/coffee-hero-bg.jpg";

const Hero = () => {
  // অ্যানিমেশন ভ্যারিয়েন্টস (Animation Variants)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // প্রতিটি এলিমেন্ট একে অপরের পরে আসবে
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // নিচে থেকে উপরে আসবে
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute z-20 w-full h-full backdrop-blur-[2px] bg-black/50" />
      <motion.video
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src="/CoffeeRoastingBackgroundVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full z-10 object-cover"
      ></motion.video>

      {/* Background Image */}
      {/* <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${coffeeHeroBg})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        
      </motion.div> */}

      {/* Content */}
      <motion.div
        className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Welcome Text */}
        <motion.p
          variants={itemVariants}
          className="font-display italic text-lg sm:text-xl lg:text-2xl text-primary mb-4 sm:mb-6"
        >
          Welcome to Cafeteria TNC!
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-display italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8"
        >
          Artisan Roasts, Timeless Flavor
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-sm text-white sm:text-base lg:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          Handpicked beans, slow-roasted to perfection, carrying our family’s
          coffee legacy in every sip.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
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
            Buy Coffee
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-full w-full bg-black/50" />
    </section>
  );
};

export default Hero;
