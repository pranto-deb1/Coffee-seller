import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "../../../HomePage/Components/Testimonial/TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Brooklyn Simmons",
    role: "UX Designer at XYZ",
    content: "The coffee here is absolutely divine! Every sip takes me on a journey through rich, complex flavors. The ambiance is perfect for both work and relaxation.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Esther Howard",
    role: "UX Designer at XYZ",
    content: "I've been a regular here for over a year now. The baristas know my order by heart, and the quality never disappoints.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Cameron Wilson",
    role: "Product Manager",
    content: "Best espresso in town, hands down. The attention to detail in every cup is remarkable. Perfect temperature, perfect crema.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sofia Martinez",
    role: "Creative Director",
    content: "A hidden gem! The pour-over coffee here is an experience in itself. Watching the baristas work is like watching artists create.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

const AboutTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // ডিসপ্লের ওপর ভিত্তি করে আইটেম সংখ্যা নির্ধারণ
  const itemsPerPage = 2; 
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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-bold text-3xl sm:text-3xl md:text-5xl lg:text-5xl italic text-chokolet mb-6 md:mb-8">
            Testimonials
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-muted-foreground">
            Curious about our coffee experience? Dive into our reviews section
            and hear what our patrons have to say.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center gap-4 md:gap-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center hover:border-chokolet hover:text-chokolet transition-colors"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>

          <div className="flex-1 max-w-5xl overflow-hidden min-h-[350px] md:min-h-[280px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              >
                {visibleTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} {...testimonial} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center hover:border-chokolet hover:text-chokolet transition-colors"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        </div>

        {/* Dots Animation */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === currentIndex
                  ? "w-10 bg-chokolet"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;