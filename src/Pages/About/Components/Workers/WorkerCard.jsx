import { motion } from "framer-motion";

const WorkerCard = ({ image, name, role }) => {
  return (
    <motion.div
      // স্ক্রিনে আসার অ্যানিমেশন
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group flex flex-col items-center"
    >
      <div className="relative overflow-hidden rounded-lg mb-4 shadow-lg transition-transform duration-300">
        <motion.img
          // ইমেজ হোভার করলে জুম হবে
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={image}
          alt={name}
          className="w-full h-auto aspect-[4/5] object-cover"
        />
        
        {/* একটি হালকা ওভারলে যা হোভার করলে দেখা যাবে */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <motion.h3 
        // নামটা সামান্য নিচ থেকে আসবে
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-heading text-xl md:text-2xl font-semibold italic text-primary"
      >
        {name}
      </motion.h3>

      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-muted-foreground text-sm md:text-base mt-1"
      >
        {role}
      </motion.p>
    </motion.div>
  );
};

export default WorkerCard;