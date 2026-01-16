import { motion } from "framer-motion";
import { Home, Mail, Phone, Send, Facebook, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Menu", href: "#" },
  ];

  const openingHours = [
    { days: "Monday to Friday", hours: "10:00 AM to 12:00 PM" },
    { days: "Saturday to Sunday", hours: "09:00 AM to 01:00 PM" }, // ডেটা সামান্য আপডেট করা হয়েছে ভেরিয়েশনের জন্য
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-black text-white overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          
          {/* Brand & Contact */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="font-script text-2xl italic text-footer-heading lg:text-3xl">
              Crafting Memories, One
              <br />
              Perfect Cup at a Time
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <Home className="mt-1 h-5 w-5 shrink-0 transition-colors group-hover:text-footer-heading" />
                <p className="text-sm leading-relaxed">
                  4517 Washington Ave. Manchester,
                  <br />
                  Kentucky 39495
                </p>
              </div>

              <div className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 shrink-0 transition-colors group-hover:text-footer-heading" />
                <a
                  href="mailto:example@gmail.com"
                  className="text-sm transition-colors hover:text-footer-heading"
                >
                  example@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 shrink-0 transition-colors group-hover:text-footer-heading" />
                <a
                  href="tel:+14065XX012X"
                  className="text-sm transition-colors hover:text-footer-heading"
                >
                  (406) 5XX-012X
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="font-script text-xl italic text-footer-heading lg:text-2xl">
              Quick Link
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={link.href}
                    className="inline-block text-sm transition-colors hover:text-footer-heading"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="font-script text-xl italic text-footer-heading lg:text-2xl">
              Opening Hours
            </h4>
            {openingHours.map((schedule, index) => (
              <div key={index} className="space-y-1">
                <p className="font-script text-lg italic text-footer-heading">
                  {schedule.days}
                </p>
                <p className="text-sm">{schedule.hours}</p>
              </div>
            ))}
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="font-script text-xl italic text-footer-heading lg:text-2xl">
              Newsletter Subscribe
            </h4>
            <p className="text-sm leading-relaxed">
              Stay In the Loop: Unlock Exclusive Offers, Culinary Insights, and More.
            </p>

            <form onSubmit={handleSubscribe} className="relative group">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-footer-border bg-transparent px-4 py-3 pr-12 text-sm placeholder:text-footer-foreground/60 focus:border-footer-accent focus:outline-none focus:ring-1 focus:ring-footer-accent transition-all"
                required
              />
              <motion.button
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-footer-accent hover:text-footer-heading transition-colors"
                aria-label="Subscribe"
              >
                <Send className="h-5 w-5" />
              </motion.button>
            </form>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { 
                  Icon: () => (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                    </svg>
                  ), 
                  label: "Pinterest" 
                },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                  className="hover:text-footer-heading transition-colors"
                >
                  <social.Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        className="border-t border-footer-border"
      >
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-xs italic sm:text-sm">
            Copyright © 2026 Cafeteria TNC | Designed by TNCFlow | Powered By Webflow
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;