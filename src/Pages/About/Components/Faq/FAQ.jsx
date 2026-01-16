import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight, Plus } from "lucide-react";

const faqItems = [
  {
    question: "How can I provide feedback or share my experience?",
    answer:
      "We love hearing from our customers! You can share your feedback through our contact form, leave a review on Google, or speak directly with our staff during your visit.",
  },
  {
    question: "How can I place an online order?",
    answer:
      "You can place an online order through our website or mobile app. Simply browse our menu, add items to your cart, and proceed to checkout. We offer both pickup and delivery options.",
  },
  {
    question: "Can I make a reservation for dine-in?",
    answer:
      "Yes! You can make reservations through our website or by calling us directly. We recommend booking in advance for weekends and special occasions.",
  },
  {
    question: "Are there vegetarian and vegan options on the menu?",
    answer:
      "Absolutely! We offer a variety of vegetarian and vegan options, including plant-based milk alternatives for all our coffee drinks and delicious vegan pastries.",
  },
  {
    question: "How do you ensure the quality of your ingredients?",
    answer:
      "We source our coffee beans directly from sustainable farms and partner with local suppliers for fresh ingredients. Every batch is tested for quality and freshness.",
  },
  {
    question: "Do you have any ongoing promotions or loyalty programs?",
    answer:
      "Yes! Join our loyalty program to earn points on every purchase. We also run seasonal promotions and offer exclusive discounts to our members.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative text-white bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
      {/* Background Overlay Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/60 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* FAQ Content Area */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold italic text-foreground leading-tight">
                Frequently Asked <br className="hidden sm:block" /> Questions
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl">
                Got questions? We've got answers! Explore our FAQ section to
                find everything you need.
              </p>
            </motion.div>

            {/* Accordion List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8"
            >
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={index} className="border-b border-white/10 py-1">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full flex items-center justify-between text-left text-foreground hover:text-white transition-colors text-base sm:text-lg font-medium py-5"
                    >
                      <span className="pr-4">{item.question}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Plus className="h-5 w-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-muted-foreground text-sm sm:text-base pb-5 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Sticky Contact Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24"
            >
              <div className="bg-secondary rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl border border-white/5">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <MessageCircle
                    className="w-8 h-8 text-background"
                    strokeWidth={2.5}
                  />
                </motion.div>

                <div className="space-y-3">
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold italic text-foreground leading-tight">
                    You have different
                    <br />
                    Questions?
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    We're here to help! If you have any questions or just want
                    to chat about coffee, reach out to us.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-4 rounded-full transition-all group"
                >
                  Contact us
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
