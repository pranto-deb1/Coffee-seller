import { motion } from "framer-motion";
import coffeeShopInterior from "/assets/tattooed-barista-checks-raw-green-coffee-beans-from-white-plastic-basket-sitting-cotton-bags-warehouse.jpg";
import baristaPortrait from "/assets/hot-coffee-bean-smoked-deep-dark-background.jpg";
import coffeeCustomers from "/assets/coffee-decoration-with-hands-holding-beans.jpg";
import coffeeTeam from "/assets/coffee-team.jpg";
import coffeeShopWorker from "/assets/coffee-shop-worker.jpg";
import grandmotherGranddaughter from "/assets/fragrant-coffee-beans-are-scattered-from-jar-rustic-tabletop-background-closeup-selective-focus-copy-space-banner.jpg";
import baristaAtWork from "/assets/barista-at-work.jpg";
import CoffeeBranch from "./CoffeeBranch";
import CoffeeBean from "./CoffeeBean";

const galleryImages = [
  {
    src: coffeeShopInterior,
    alt: "Cozy coffee shop interior with warm lighting",
  },
  {
    src: baristaPortrait,
    alt: "Professional barista in brown apron",
  },
  {
    src: coffeeCustomers,
    alt: "Happy customers enjoying coffee",
  },
  {
    src: coffeeTeam,
    alt: "Coffee shop team members smiling",
  },
  {
    src: coffeeShopWorker,
    alt: "Barista working in coffee shop",
  },
  {
    src: grandmotherGranddaughter,
    alt: "Grandmother and granddaughter sharing a moment",
  },
  {
    src: baristaAtWork,
    alt: "Barista preparing coffee",
  },
];

const ImageGallery = () => {
  const mainImage = galleryImages[0];
  const rightImages = galleryImages.slice(1);

  // Animation variants for cleaner code
  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom },
    }),
  };

  return (
    <section className="relative min-h-screen bg-background py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Decorative coffee branch - top left */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotate: -10 }}
        whileInView={{ opacity: 1, x: -16, y: -16, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-32 h-40 sm:w-48 sm:h-60 md:w-56 md:h-72 z-10"
      >
        <CoffeeBranch className="w-full h-full" />
      </motion.div>

      {/* Floating coffee beans with Motion */}
      <div className="absolute top-20 right-8 sm:right-16 md:right-24 z-10">
        <CoffeeBean delay={0.5} size={20} className="opacity-60" />
      </div>
      <div className="absolute top-28 right-4 sm:right-12 md:right-16 z-10">
        <CoffeeBean
          delay={0.7}
          size={16}
          className="opacity-40 animate-float-slow"
        />
      </div>
      <div className="absolute top-36 right-16 sm:right-24 md:right-32 z-10">
        <CoffeeBean delay={0.9} size={18} className="opacity-50" />
      </div>

      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="font-bold text-3xl sm:text-3xl md:text-5xl lg:text-5xl italic text-chokolet mb-6 md:mb-8">
            From Bean to Cup
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4">
            From the bustling ambiance to the intricate details of our coffee
            creations, immerse yourself in the Cafeteria TNC experience.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-2 md:gap-2 max-w-7xl mx-auto">
          {/* Main large image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:row-span-2"
          >
            <div className="relative w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg group h-64 sm:h-80 md:h-96 lg:h-full min-h-[300px] lg:min-h-[500px]">
              <img
                src={mainImage.src}
                alt={mainImage.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Right grid – top */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {rightImages.slice(0, 3).map((image, index) => (
              <motion.div
                key={index}
                custom={0.2 + index * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative h-full w-full overflow-hidden rounded-lg sm:rounded-xl shadow-md group aspect-[4/5]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Right grid – bottom */}
          <div className="grid grid-cols-2 gap-2">
            {rightImages.slice(3, 5).map((image, index) => (
              <motion.div
                key={index + 3}
                custom={0.5 + index * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative h-full w-full overflow-hidden rounded-lg sm:rounded-xl shadow-md group aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
