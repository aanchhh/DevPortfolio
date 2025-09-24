import { motion } from "framer-motion";

const Card = ({ children, className, delay = 0, variant = "default" }) => {
  const baseStyles =
    "rounded-2xl flex items-center justify-center shadow-lg cursor-pointer";

  const variantStyles =
    variant === "center"
      ? "bg-[#F5B195] text-black round-lg"
      : "bg-white text-black";

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay}}
      whileHover={{ scale: 1.05 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
