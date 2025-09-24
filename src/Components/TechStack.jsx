// src/Components/TechStackCard.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PenTool, Monitor, Database } from "lucide-react";

export default function TechStackCard() {
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
      <h3 className="text-lg font-bold mb-4">Tech Stack</h3>

      {/* Tech List */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <PenTool className="w-5 h-5 text-black flex-shrink-0" />
          <p className="text-gray-800 text-sm font-medium">
            Figma, Canva, Adobe Illustrator
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Monitor className="w-5 h-5 text-black flex-shrink-0" />
          <p className="text-gray-800 text-sm font-medium">
            ReactJS, HTML, CSS, JavaScript
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Database className="w-5 h-5 text-black flex-shrink-0" />
          <p className="text-gray-800 text-sm font-medium">
            MongoDB, PHP, SQL
          </p>
        </div>
      </div>
       {/* Button */}
       <div className="mt-6 flex justify-end">
        <a
          href="#projects"
          className="px-4 py-2 text-sm font-semibold bg-[#F5B195]/80 text-black rounded-lg hover:bg-[#F5B195]/60 transition"
        >
          View Projects
        </a>
      </div>
    </motion.div>
  );
}
