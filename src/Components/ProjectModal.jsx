import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 h-screen"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl p-8 max-w-2xl w-[90%] shadow-lg relative text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X size={24} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

        {/* Duration + Domain */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 italic">{project.duration}</p>
          <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-md text-sm">
            {project.domain}
          </span>
        </div>

        {/* Description */}
        <ul className="mt-4 mx-4 list-disc list-inside text-gray-700 space-y-2">
          {project.description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
