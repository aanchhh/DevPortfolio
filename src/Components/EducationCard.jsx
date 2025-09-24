import { motion } from "framer-motion";
import { GraduationCap, Award, Laptop, Download } from "lucide-react";

export default function EducationCard() {
  return (
    <motion.div
      className="relative w-full h-full bg-white rounded-2xl shadow-md overflow-hidden p-6 flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      {/* Title */}
      <motion.h2
        className="text-xl font-bold mb-4"
        style={{ fontFamily: "Raleway, sans-serif" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        Education
      </motion.h2>

      {/* Content */}
      <motion.div
        className="flex flex-col space-y-4 flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
      >
        <div className="flex items-start gap-3">
          <GraduationCap className="w-5 h-5 text-black flex-shrink-0" />
          <p className="text-gray-800 text-sm font-medium">
            K.J. Somaiya Institute of Technology <br />
            <span className="text-gray-600">(B.Tech in CS)</span>
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Award className="w-5 h-5 text-black flex-shrink-0" />
          <p className="text-gray-800 text-sm font-medium">CGPA: 9.56</p>
        </div>

        <div className="flex items-start gap-3">
          <Laptop className="w-5 h-5 text-black flex-shrink-0" />
          <p className="text-gray-800 text-sm font-medium">
            Operating Systems, DBMS, Data Warehousing, Networks, DS
          </p>
        </div>
      </motion.div>

      {/* Resume Button */}
      <motion.div
        className="mt-auto flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
      >
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 bg-[#F5B195]/80 text-black px-4 py-2 mt-4 rounded-lg text-sm font-semibold hover:bg-[#F5B195]/60 transition"
        >
          <Download className="w-4 h-4" /> Download Resume
        </a>
      </motion.div>
    </motion.div>
  );
}
