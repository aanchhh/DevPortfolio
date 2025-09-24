// src/Components/MainCard.jsx
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import myPhoto from "../assets/myphoto-cutout.svg";

export default function MainCard() {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center text-center h-[300px] md:h-full w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Typewriter Text */}
      <h1
        className="
          text-2xl md:text-3xl font-bold leading-relaxed whitespace-pre-line
          z-0
          md:absolute md:top-10
        "
      >
        <Typewriter
          words={["Hello, I am\nAANCHAL MEHTA"]}
          typeSpeed={80}
          deleteSpeed={0}
          delaySpeed={500}
          cursor
          cursorStyle="|"
        />
      </h1>

      {/* Photo (only desktop) */}
      <div className="hidden md:flex w-full h-full mt-16 items-center justify-center z-10">
        <img
          src={myPhoto}
          alt="Aanchal Mehta"
          className="h-full w-full object-contain"
        />
      </div>
    </motion.div>
  );
}
