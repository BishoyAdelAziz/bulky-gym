import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const SmoothNumberIncrease = ({ endValue, duration = 6 }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(0);

  useEffect(() => {
    const range = endValue;
    const startTime = performance.now();

    const animateNumber = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );
      setValue(Math.floor(progress * range));

      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      }
    };

    requestAnimationFrame(animateNumber);
  }, [endValue, duration]);

  return (
    <motion.span className="text-lime-500 font-extrabold ">
      {value}+
    </motion.span>
  );
};

export default SmoothNumberIncrease;
