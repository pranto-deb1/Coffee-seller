import { motion } from "framer-motion";

const CoffeeBranch = ({ className = "" }) => {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className={className}
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main curved stem */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
        d="M90 280 C85 240, 80 200, 85 160 C90 120, 95 100, 100 80 C105 60, 100 40, 95 20"
        className="stroke-coffee-medium"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Left branch 1 */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        d="M88 200 C70 195, 50 190, 30 180"
        className="stroke-coffee-medium"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Left branch 2 */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        d="M86 160 C65 150, 45 145, 25 135"
        className="stroke-coffee-medium"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Right branch 1 */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        d="M92 180 C115 175, 135 170, 155 160"
        className="stroke-coffee-medium"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Right branch 2 */}
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        d="M98 120 C120 115, 140 108, 160 95"
        className="stroke-coffee-medium"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Coffee leaves - Left side */}
      <motion.ellipse
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        cx="25"
        cy="175"
        rx="22"
        ry="12"
        className="fill-coffee-medium/15 stroke-coffee-medium"
        strokeWidth="1.5"
        transform="rotate(-25 25 175)"
      />
      <motion.line
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 1.1 }}
        x1="10"
        y1="175"
        x2="38"
        y2="175"
        className="stroke-coffee-medium/60"
        strokeWidth="0.8"
        transform="rotate(-25 25 175)"
      />

      <motion.ellipse
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        cx="45"
        cy="190"
        rx="20"
        ry="11"
        className="fill-coffee-medium/15 stroke-coffee-medium"
        strokeWidth="1.5"
        transform="rotate(-15 45 190)"
      />

      <motion.ellipse
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        cx="20"
        cy="130"
        rx="24"
        ry="13"
        className="fill-coffee-medium/15 stroke-coffee-medium"
        strokeWidth="1.5"
        transform="rotate(-30 20 130)"
      />
      <motion.line
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 1.2 }}
        x1="2"
        y1="130"
        x2="36"
        y2="130"
        className="stroke-coffee-medium/60"
        strokeWidth="0.8"
        transform="rotate(-30 20 130)"
      />

      <motion.ellipse
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.85 }}
        cx="42"
        cy="145"
        rx="18"
        ry="10"
        className="fill-coffee-medium/15 stroke-coffee-medium"
        strokeWidth="1.5"
        transform="rotate(-20 42 145)"
      />

      {/* Coffee leaves - Right side */}
      <motion.ellipse
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
        cx="160"
        cy="155"
        rx="22"
        ry="12"
        className="fill-coffee-medium/15 stroke-coffee-medium"
        strokeWidth="1.5"
        transform="rotate(25 160 155)"
      />
      <motion.line
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 1.3 }}
        x1="143"
        y1="155"
        x2="175"
        y2="155"
        className="stroke-coffee-medium/60"
        strokeWidth="0.8"
        transform="rotate(25 160 155)"
      />

      {/* Top leaves */}
      <motion.ellipse
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
        cx="95"
        cy="25"
        rx="22"
        ry="12"
        className="fill-coffee-medium/15 stroke-coffee-medium"
        strokeWidth="1.5"
      />
    </motion.svg>
  );
};

export default CoffeeBranch;
