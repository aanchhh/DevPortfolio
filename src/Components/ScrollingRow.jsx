import React, { useRef, useEffect, useState } from "react";

const ScrollingRow = ({ direction = "left", projects, onProjectClick }) => {
  const rowRef = useRef(null);
  const animationRef = useRef(null);
  const contentWidthRef = useRef(0);
  const [paused, setPaused] = useState(false);

  // Detect if mobile screen
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return; // disable infinite scroll on mobile

    const row = rowRef.current;
    if (!row) return;

    contentWidthRef.current = row.scrollWidth / 2; // width of one set of projects

    const step = () => {
      if (!paused && row) {
        if (direction === "left") {
          row.scrollLeft += 1;
          if (row.scrollLeft >= contentWidthRef.current) row.scrollLeft = 0;
        } else {
          row.scrollLeft -= 1;
          if (row.scrollLeft <= 0) row.scrollLeft = contentWidthRef.current;
        }
      }
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationRef.current);
  }, [paused, direction, isMobile]);

  return (
    <div
      ref={rowRef}
      className={`flex whitespace-nowrap ${
        isMobile
          ? "overflow-x-auto scroll-snap-x gap-4 px-2" // mobile scrollable
          : "overflow-x-hidden"
      }`}
      onMouseEnter={() => !isMobile && setPaused(true)}
      onMouseLeave={() => !isMobile && setPaused(false)}
    >
      {[...projects, ...(!isMobile ? projects : [])].map((project, idx) => (
        <div
          key={idx}
          className={`flex-shrink-0 w-[500px] h-[260px] rounded-xl cursor-pointer ${
            isMobile ? "scroll-snap-start" : "mx-2"
          }`}
          style={{
            backgroundImage: `url(${project.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => onProjectClick(project)}
        />
      ))}
    </div>
  );
};

export default ScrollingRow;
