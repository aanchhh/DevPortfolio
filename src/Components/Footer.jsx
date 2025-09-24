import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FDF3D6] text-black py-16 px-6">
      {/* Top Heading */}
      <div id="contact" className="text-2xl font-bold mb-6">
        Aanchal | Designer x Developer
      </div>

      {/* Icons + Button Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        {/* Icons */}
        <div className="flex justify-center md:justify-start gap-6 text-2xl">
          <a
            href="https://linkedin.com/in/aanchal-mehta9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/aanchhh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aanchalmehta.9114@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Button */}
        <button className="bg-[#F5B195] text-black px-5 py-2 rounded-2xl font-medium hover:opacity-80 transition">
          Let’s Connect
        </button>
      </div>

      {/* Divider */}
      <hr className="border-black mx-8 mb-6 mt-6" />

      {/* Bottom Line */}
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between text-lg font-bold gap-2">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <span>Made with React.js, Tailwind</span>
          <FaHeart className="text-red-500" />
        </div>

        {/* Right Side */}
        <div>
          <span>by Aanchal Mehta.</span>
        </div>
      </div>
    </footer>
  );
}
