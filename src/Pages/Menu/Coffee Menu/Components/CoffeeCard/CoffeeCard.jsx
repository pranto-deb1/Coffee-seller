import { motion } from "framer-motion";
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CoffeeCard = ({ name, description, price, image }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.02 }} // হোভার করলে সামান্য উপরে উঠবে
      className="bg-white rounded-xl shadow-lg overflow-hidden max-w-xs cursor-pointer"
    >
      {/* Coffee Image */}
      <div className="h-48 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }} // ছবির ওপর মাউস নিলে জুম হবে
          transition={{ duration: 0.4 }}
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-xl font-bold italic text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="text-lg font-black text-gray-900">${price}</div>
      </div>
    </motion.div>
  );
};

export default CoffeeCard;
