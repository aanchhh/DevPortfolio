// src/Components/Brewing.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee } from "lucide-react";

export default function Brewing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-full bg-white rounded-2xl shadow-md p-6 flex flex-col justify-start"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title */}
      <h3 className="text-lg font-bold mb-4">Currently Brewing</h3>

      {/* Content */}
      <div className="flex items-start gap-3">
        <Coffee className="w-5 h-5 text-black flex-shrink-0 mt-1" />
        <p className="text-gray-800 text-sm font-medium">
          Working on an exciting project, want to know more? Contact Me.
        </p>
      </div>
    </motion.div>
  );
}
