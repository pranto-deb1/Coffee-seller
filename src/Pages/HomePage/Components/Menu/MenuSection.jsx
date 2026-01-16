import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Framer Motion ইমপোর্ট
import MenuItem from "./MenuItem";

import espressoImg from "/assets/espresso.jpg";

import cappuccinoImg from "/assets/cappuccino.jpg";

import mediumRoastImg from "/assets/iced-latte.jpg";

import singleOriginEthiopiaImg from "/assets/iced-coffee.jpg";

import darkRoastEspressoImg from "/assets/croissant.jpg";

import houseFilterBlendImg from "/assets/panini.jpg";

import singleOriginColombiaImg from "/assets/avocado-toast.jpg";

import espressoSignatureShotImg from "/assets/latte.jpg";

import kenyaAALightImg from "/assets/affogato.jpg";

import coldBrewHouseBlendImg from "/assets/chocolate-croissant.jpg";

const menuItems = [
  {
    id: 1,
    name: "Signature Medium Roast",
    description:
      "Balanced flavor with chocolate and nutty notes, roasted to perfection",
    price: "$14.00",
    image: mediumRoastImg,
    category: ["all", "espresso-blends"],
  },
  {
    id: 2,
    name: "Single Origin Ethiopia",
    description:
      "Bright citrus and floral notes, light body, perfect for pour-over brewing",
    price: "$16.00",
    image: singleOriginEthiopiaImg,
    category: ["all", "single-origin-coffees"],
  },
  {
    id: 3,
    name: "Dark Roast Espresso Blend",
    description:
      "Bold body with cocoa and spice notes, low acidity, ideal for espresso shots",
    price: "$15.50",
    image: darkRoastEspressoImg,
    category: ["all", "espresso-blends"],
  },
  {
    id: 4,
    name: "House Filter Blend",
    description:
      "Smooth and balanced, medium roast for drip or pour-over brewing",
    price: "$13.50",
    image: houseFilterBlendImg,
    category: ["all", "brewed-filtered"],
  },
  {
    id: 5,
    name: "Single Origin Colombia",
    description:
      "Caramel sweetness, medium body, bright acidity, hand-roasted to highlight terroir",
    price: "$16.50",
    image: singleOriginColombiaImg,
    category: ["all", "single-origin-coffees"],
  },
  {
    id: 6,
    name: "Espresso Signature Shot",
    description:
      "Intense, aromatic, perfectly balanced espresso shot from our premium blend",
    price: "$12.00",
    image: espressoSignatureShotImg,
    category: ["all", "espresso-blends"],
  },
  {
    id: 7,
    name: "Kenya AA Light Roast",
    description:
      "Vibrant acidity with berry and citrus notes, light body, single origin",
    price: "$17.00",
    image: kenyaAALightImg,
    category: ["all", "single-origin-coffees"],
  },
  {
    id: 8,
    name: "Cold Brew House Blend",
    description:
      "Smooth, mellow flavor, subtly sweet, perfect for cold brew enthusiasts",
    price: "$14.50",
    image: coldBrewHouseBlendImg,
    category: ["all", "brewed-filtered"],
  },
];

const tabs = [
  { id: "all", label: "All" },
  { id: "espresso-blends", label: "Espresso & Blends" },
  { id: "brewed-filtered", label: "Brewed & Filtered" },
  { id: "single-origin-coffees", label: "Single Origin Coffees" },
];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = menuItems.filter((item) =>
    item.category.includes(activeTab)
  );

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden bg-background">
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header - Fade Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-bold text-3xl md:text-5xl italic text-chokolet mb-6">
            Our Coffee Collection
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Explore our regular menu, a treasure trove of familiar favorites and
            delightful surprises. There's something to satisfy every coffee
            lover's craving.
          </p>
        </motion.div>

        {/* Tabs - Interactive Buttons */}
        <nav className="flex flex-wrap justify-center gap-2 md:gap-6 mb-10 md:mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-medium ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-chokolet border border-chokolet/20 hover:bg-chokolet/5"
              }`}
            >
              <span className="relative z-10">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-chokolet rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Menu Grid - Smooth Layout Transition */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <MenuItem
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
