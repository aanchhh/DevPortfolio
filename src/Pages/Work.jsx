import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import work from "../assets/workDeets";

export default function Work() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const itemRefs = useRef([]);
  const barRef = useRef(null);
  const [dotTop, setDotTop] = useState(0);

  // Update dot position for desktop vertical line
  useEffect(() => {
    const current = itemRefs.current[selectedIndex];
    if (current && barRef.current) {
      const parentTop = barRef.current.getBoundingClientRect().top;
      const itemTop = current.getBoundingClientRect().top;
      setDotTop(itemTop - parentTop + current.offsetHeight / 2 - 8); // 8px = half of dot height
    }
  }, [selectedIndex]);

  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col bg-[#CBE6C7] px-4 sm:px-6 lg:px-10 pt-10">
      {/* Heading */}
      <h1 id="work" className="text-3xl font-bold text-[#28536B] mb-12 top-5 left-4 ">
        Work Experience
      </h1>

      <div className="flex flex-col lg:flex-row w-full h-full gap-8 lg:gap-12">
        {/* Left Side (Desktop: vertical line + titles) */}
        <div className="hidden lg:flex w-[35%] relative">
          <div className="relative flex items-start h-full ml-6">
            {/* Vertical Bar */}
            <div
              ref={barRef}
              className="relative w-1 bg-[#28536B] rounded-full h-[80%] mt-6 mb-6"
            >
              {/* Dot */}
              <div
                className="absolute w-4 h-4 bg-[#28536B] rounded-full -left-[6px] transition-all duration-300 z-10"
                style={{ top: `${dotTop}px` }}
              />
            </div>

            {/* Titles */}
            <div className="flex flex-col justify-between h-[80%] ml-10 mt-6">
              {work.map((item, index) => (
                <button
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  onClick={() => setSelectedIndex(index)}
                  className={`py-3 text-left text-xl font-expletus transition-colors ${
                    selectedIndex === index ? "text-[#28536B] font-bold" : "text-[#28536B]"
                  }`}
                >
                  {item.company}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[65%] flex flex-col items-center justify-center text-justify relative overflow-visible">
          {/* Desktop: Animated single card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:flex w-full max-w-[650px] bg-white text-[#28536B] rounded-2xl shadow-2xl p-8 text-lg leading-relaxed flex-col mx-auto"
            >
              <h2 className="text-2xl font-semibold mb-4">{work[selectedIndex].title}</h2>
              <p>{work[selectedIndex].description}</p>
            </motion.div>
          </AnimatePresence>

          {/* Mobile: Stacked cards */}
          <div className="flex flex-col lg:hidden w-full gap-4 max-w-[600px] mx-auto">
            {work.map((item, index) => (
              <div
                key={index}
                className="w-full bg-white text-[#28536B] rounded-2xl shadow-2xl p-6 text-lg leading-relaxed flex flex-col"
              >
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
