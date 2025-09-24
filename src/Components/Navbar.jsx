import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react"; // chat icon

export default function Navbar() {
  return (
    <motion.nav
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 mx-4 mt-4 rounded-lg shadow-md origin-center"
    >
      <div className="flex items-center justify-between px-3 py-2 bg-[#F5B195] rounded-xl">
        {/* Left side - name */}
        <div className="font-bold text-lg leading-tight">
          <p>Aanchal</p>
          <p>Mehta.</p>
        </div>

        {/* Right side - links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#projects" className="hover:text-[#FDF3D6] transition">
            Projects
          </a>
          <a href="#work" className="hover:text-[#FDF3D6] transition">
            Work
          </a>
          <a href="#achievements" className="hover:text-[#FDF3D6] transition">
            Achievements
          </a>
          <button className="p-2 hover:text-[#FDF3D6] transition">
            <a href="#contact">
            <MessageCircle size={20} />
            </a>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
