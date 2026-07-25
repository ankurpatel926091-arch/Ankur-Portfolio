import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseEnter = () => setHover(true);
    const mouseLeave = () => setHover(false);

    window.addEventListener("mousemove", moveCursor);

    const targets = document.querySelectorAll(
      "a,button,input,textarea,.cursor-hover"
    );

    targets.forEach((item) => {
      item.addEventListener("mouseenter", mouseEnter);
      item.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      targets.forEach((item) => {
        item.removeEventListener("mouseenter", mouseEnter);
        item.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - (hover ? 22 : 10),
        y: position.y - (hover ? 22 : 10),
        width: hover ? 44 : 20,
        height: hover ? 44 : 20,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      className="
        fixed
        top-0
        left-0
        rounded-full
        bg-cyan-400/30
        border
        border-cyan-400
        backdrop-blur-md
        pointer-events-none
        z-[99999]
        shadow-[0_0_30px_rgba(34,211,238,0.7)]
      "
    />
  );
};

export default Cursor;