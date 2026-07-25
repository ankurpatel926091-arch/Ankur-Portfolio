import hero from "../../assets/hero.png";
import { motion } from "framer-motion";

import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative flex justify-center items-center"
    >
      {/* Background Glow */}
      <div className="absolute w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[100px] animate-pulse"></div>

      {/* React */}
      <div className="absolute top-0 left-8 animate-bounce">
        <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-cyan-400/20 flex items-center justify-center shadow-xl">
          <FaReact className="text-sky-400 text-4xl" />
        </div>
      </div>

      {/* Node */}
      <div className="absolute top-16 right-4 animate-pulse">
        <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-green-500/20 flex items-center justify-center shadow-xl">
          <FaNodeJs className="text-green-500 text-4xl" />
        </div>
      </div>

      {/* MongoDB */}
      <div className="absolute bottom-20 left-0 animate-bounce">
        <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-green-500/20 flex items-center justify-center shadow-xl">
          <SiMongodb className="text-green-500 text-4xl" />
        </div>
      </div>

      {/* JavaScript */}
      <div className="absolute bottom-8 right-0 animate-pulse">
        <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-yellow-400/20 flex items-center justify-center shadow-xl">
          <SiJavascript className="text-yellow-400 text-4xl" />
        </div>
      </div>

      {/* Tailwind */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-cyan-400/20 flex items-center justify-center shadow-xl">
          <SiTailwindcss className="text-cyan-400 text-4xl" />
        </div>
      </div>

      {/* Outer Ring */}
      <div className="absolute w-[360px] h-[360px] md:w-[470px] md:h-[470px] rounded-full border border-cyan-400/20 animate-spin [animation-duration:25s]"></div>

      {/* Hero Image */}
      <div className="relative">

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl scale-110"></div>

        {/* Image Circle */}
        <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-[6px] border-cyan-400 shadow-[0_0_80px_rgba(34,211,238,0.45)]">

          <img
            src={hero}
            alt="Ankur Patel"
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
          />

        </div>

      </div>
    </motion.div>
  );
};

export default HeroImage;