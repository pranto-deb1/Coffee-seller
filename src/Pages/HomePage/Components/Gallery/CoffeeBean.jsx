import { motion } from "framer-motion";

const CoffeeBean = ({ className = "", delay = 0, size = 24 }) => {
  return (
    <motion.svg
      initial={{ opacity: 0, y: 20, rotate: -10 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
      width={size}
      height={size * 1.3}
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="12"
        cy="16"
        rx="10"
        ry="14"
        className="fill-coffee-medium/30 stroke-coffee-medium"
        strokeWidth="1.5"
      />
      {/* Center line of coffee bean */}
      <path
        d="M12 4 C8 10, 8 22, 12 28"
        className="stroke-coffee-medium"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default CoffeeBean;
