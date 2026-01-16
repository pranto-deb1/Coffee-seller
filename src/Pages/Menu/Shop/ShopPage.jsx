import React from "react";
import { motion } from "framer-motion"; // Framer Motion ইম্পোর্ট
import Banner from "../../../SharedComponents/Banner";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import InspirationGallery from "../../../SharedComponents/InspirationGallery";

const categories = [
  { name: "Single Origin Coffee", count: 12 },
  { name: "Blends", count: 8 },
  { name: "Espresso", count: 10 },
  { name: "Filter & Pour Over", count: 7 },
  { name: "Cold Brew & Iced Coffee", count: 5 },
  { name: "Limited Editions", count: 4 },
  { name: "Merch & Gift Cards", count: 3 },
];

const products = [
  {
    id: 1,
    name: "Coffee Beans",
    description: "Experience the Nicaragua White Bean's exquisite flavor.",
    price: "70.50",
    image: "/assets/hero-bg.jpg",
  },
  {
    id: 2,
    name: "Yellow Bean",
    description: "Experience the Nicaragua White Bean's exquisite flavor.",
    price: "70.50",
    image: "/assets/hero-bg.jpg",
  },
  {
    id: 3,
    name: "Ethiopian Beans",
    description: "Experience the Nicaragua White Bean's exquisite flavor.",
    price: "70.50",
    image: "/assets/hero-bg.jpg",
  },
  {
    id: 4,
    name: "Coffee Beans",
    description: "Experience the Nicaragua White Bean's exquisite flavor.",
    price: "70.50",
    image: "/assets/hero-bg.jpg",
  },
  {
    id: 5,
    name: "Yellow Bean",
    description: "Experience the Nicaragua White Bean's exquisite flavor.",
    price: "70.50",
    image: "/assets/hero-bg.jpg",
  },
  {
    id: 6,
    name: "Ethiopian Beans",
    description: "Experience the Nicaragua White Bean's exquisite flavor.",
    price: "70.50",
    image: "/assets/hero-bg.jpg",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const ShopPage = () => {
  const bannerContent = {
    title: "Our Shop",
    description: "Discover our exclusive merchandise and coffee products.",
  };

  return (
    <div className="bg-[#fdf8f1] min-h-screen">
      {/* ব্যানার অ্যানিমেশন */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Banner content={bannerContent} />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-8 max-w-7xl mx-auto gap-8 p-4 py-12">
        {/* Sidebar - বাম দিক থেকে স্লাইড করে আসবে */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-2"
        >
          <Sidebar categories={categories} />
        </motion.div>

        {/* Product Grid - কার্ডগুলো নিচ থেকে উপরে ভেসে উঠবে */}
        <div className="md:col-span-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* গ্যালারি সেকশন স্ক্রল অ্যানিমেশন */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <InspirationGallery />
      </motion.div>
    </div>
  );
};

export default ShopPage;
