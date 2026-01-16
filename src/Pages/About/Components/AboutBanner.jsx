import React from "react";
import { motion } from "framer-motion";

const AboutBanner = () => {
  return (
    <section className="relative w-full h-[500px] bg-[url('/assets/girlWorking.png')] bg-cover bg-center flex items-center justify-center overflow-hidden">
      
      {/* Dark Overlay with Fade-in animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/60"
      ></motion.div>
      
      {/* Content (Relative & z-index used to stay on top of overlay) */}
      <div className="relative z-10 text-center px-4">
        {/* Small Golden Title - Animates from Top */}
        <motion.p 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#c9933f] font-['Yellowtail'] text-3xl mb-2 tracking-wide"
        >
          Cafeteria TNC
        </motion.p>
        
        {/* Main White Heading - Animates from Bottom with slight delay */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-serif italic text-3xl md:text-4xl text-white lg:text-5xl font-semibold"
        >
          Watch Our Brews Come to Life!
        </motion.h1>
      </div>

    </section>
  );
};

export default AboutBanner;