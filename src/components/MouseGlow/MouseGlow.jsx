import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseGlow = () => {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const moveGlow = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 200,
        y: position.y - 200,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.5,
      }}
      className="
        fixed
        top-0
        left-0
        w-[400px]
        h-[400px]
        rounded-full
        pointer-events-none
        z-0
        bg-cyan-400/10
        blur-[120px]
      "
    />
  );
};

export default MouseGlow;