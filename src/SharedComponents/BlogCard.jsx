import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BlogCard = ({ image, date, title, excerpt }) => {
  return (
    <motion.div
      // কার্ডটি স্ক্রিনে আসার সময় হালকা ভেসে উঠবে
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -5 }} // হোভার করলে কার্ডটি সামান্য উপরে উঠবে
      transition={{ duration: 0.4 }}
      className="flex bg-white flex-col sm:flex-row bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
    >
      {/* Image Container with Hover Effect */}
      <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }} // হোভার করলে ইমেজ জুম হবে
          transition={{ duration: 0.6 }}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="sm:w-3/5 p-5 sm:p-6 flex flex-col justify-center">
        <span className="text-muted-foreground text-sm mb-2">{date}</span>

        <h3 className="font-heading text-xl sm:text-2xl text-foreground mb-3 leading-tight">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {excerpt}
        </p>

        <motion.a
          href="#"
          className="inline-flex items-center gap-2 text-accent font-medium text-sm transition-all duration-300 group"
          whileHover={{ x: 5 }} // পুরো লিঙ্কটি সামান্য ডানে সরবে
        >
          Read more
          <motion.div
            animate={{ x: [0, 5, 0] }} // অ্যারো আইকনটি হালকা নড়াচড়া করবে
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default BlogCard;