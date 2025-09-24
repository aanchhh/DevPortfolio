import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

export default function ProjectsCompleted() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [trigger, setTrigger] = useState(false);
  const [keyCounter, setKeyCounter] = useState(0); // to force remount of CountUp

  useEffect(() => {
    if (isInView) {
      // Small delay to match fade-in
      const timer = setTimeout(() => {
        setTrigger(true);
        setKeyCounter((k) => k + 1); // update key to restart CountUp
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setTrigger(false);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="w-full h-full flex flex-col justify-between bg-white rounded-2xl shadow-md p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-lg font-semibold mb-4">Projects Completed</h3>

      <div className="flex gap-10 flex-wrap justify-center items-center flex-1">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            {trigger && (
              <CountUp
                key={`apps-${keyCounter}`}
                start={0}
                end={3}
                duration={2}
                redraw={true}
              />
            )}
            +
          </h2>
          <p className="text-sm text-gray-600 text-center mt-1">
            Applications <br /> Completed & Deployed
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            {trigger && (
              <CountUp
                key={`ui-${keyCounter}`}
                start={0}
                end={2}
                duration={2}
                redraw={true}
              />
            )}
            +
          </h2>
          <p className="text-sm text-gray-600 text-center mt-1">
            User Interfaces <br /> Designed
          </p>
        </div>
      </div>
    </motion.div>
  );
}
