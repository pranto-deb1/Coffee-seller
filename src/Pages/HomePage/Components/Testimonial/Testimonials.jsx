import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // AnimatePresence যোগ করা হয়েছে
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  // ... (আপনার ডেটা একই থাকবে)
  {
    id: 1,
    name: "Brooklyn Simmons",
    role: "UX Designer at XYZ",
    content:
      "The coffee here is absolutely divine! Every sip takes me on a journey through rich, complex flavors.",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Esther Howard",
    role: "UX Designer at XYZ",
    content:
      "I've been a regular here for over a year now. The baristas know my order by heart.",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Cameron Wilson",
    role: "Product Manager",
    content:
      "Best espresso in town, hands down. The attention to detail in every cup is remarkable.",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sofia Martinez",
    role: "Creative Director",
    content:
      "A hidden gem! The pour-over coffee here is an experience in itself.",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // স্লাইড কোন দিকে যাবে তা ট্র্যাক করতে

  const itemsPerPage = 2; // ডেস্কটপে ২ টি করে কার্ড দেখাবে
  const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  // অ্যানিমেশন ভ্যারিয়েন্ট
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="relative min-h-screen py-16 md:py-24 overflow-hidden flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif italic text-3xl md:text-4xl text-white lg:text-5xl mb-4 md:mb-6 font-semibold">
            Testimonials
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Curious about our coffee experience? Dive into our reviews section
            and hear what our patrons have to say.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center gap-2 md:gap-8">
          <motion.button
            whileHover={{
              scale: 1.1,
              color: "black",
              backgroundColor: "white",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="shrink-0 border-white text-white w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center hover:bg-white hover:text-black transition-colors z-20"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>

          <div className="flex-1 max-w-5xl overflow-hidden py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 min-h-[250px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                {visibleTestimonials.map((testimonial) => (
                  <motion.div
                    key={`${currentIndex}-${testimonial.id}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.3 },
                    }}
                  >
                    <TestimonialCard {...testimonial} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <motion.button
            whileHover={{
              scale: 1.1,
              color: "black",
              backgroundColor: "white",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="shrink-0 border-white text-white w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-colors z-20"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8 md:mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
