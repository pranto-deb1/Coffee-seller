import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "/assets/hero-bg.jpg";
import latteArt from "/assets/ChatGPT Image Jan 16, 2026, 12_02_18 PM-Picsart-BackgroundRemover.png";

const HomePageBanner = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // চাইল্ড এলিমেন্টগুলো একের পর এক আসবে
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Viewport scale effect */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }} // একবার ভিউপোর্টে আসলে আর রিপিট হবে না
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Coffee Cup Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} // ৩০% ভিউপোর্টে আসলে শুরু হবে
              transition={{ duration: 1 }}
              className="relative"
            >
              <motion.img
                src={latteArt}
                alt="Beautiful latte art coffee"
                className="w-64 sm:w-80 md:w-96 lg:w-[450px] xl:w-[560px] h-auto drop-shadow-2xl"
                // Floating continuous animation
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10 scale-75" />
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              variants={itemVariants}
              className="font-display italic text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-foreground leading-tight mb-6"
            >
              Enjoy Coffee Crafted with Time and Precision
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8"
            >
              Experience the warmth of our roastery and discover your signature
              coffee.
            </motion.p>

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
                Shop Our Coffee
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"
      />
    </section>
  );
};

export default HomePageBanner;
