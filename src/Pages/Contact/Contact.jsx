import React from "react";
import { motion } from "framer-motion"; // Framer Motion ইম্পোর্ট
import Banner from "../../SharedComponents/Banner";
import Form from "./Components/ContactForm/Form";
import Map from "./Components/Map/Map";
import InspirationGallery from "../../SharedComponents/InspirationGallery";

const Contact = () => {
  const bannerContent = {
    title: "Contact Us",
    description:
      "We would love to hear from you! Reach out to us for any inquiries or feedback.",
  };

  // অ্যানিমেশন ভেরিয়েন্ট
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* ব্যানার: পেজ লোড হওয়ার সাথে সাথে ওপর থেকে আসবে */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Banner content={bannerContent} />
      </motion.div>

      {/* ম্যাপ: স্ক্রল করলে হালকা স্কেলে ভেসে উঠবে */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="my-10"
      >
        <Map />
      </motion.div>

      {/* ফর্ম: নিচ থেকে ধীরে ধীরে উপরে আসবে */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Form />
      </motion.div>

      <InspirationGallery></InspirationGallery>
    </div>
  );
};

export default Contact;