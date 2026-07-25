import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="z-20"
    >
      <p className="inline-flex items-center gap-2 text-cyan-400 font-semibold tracking-widest uppercase">
        👋 Hello I'm
      </p>

      <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-black leading-tight">
        <span className="text-white">
          Ankur
        </span>

        <br />

        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Patel
        </span>
      </h1>

      <div className="mt-6 text-2xl md:text-3xl font-semibold">

        <TypeAnimation
          sequence={[
            "Full Stack MERN Developer",
            2000,
            "React Developer",
            2000,
            "Node.js Developer",
            2000,
            "Frontend Developer",
            2000,
          ]}
          speed={40}
          repeat={Infinity}
          className="text-cyan-400"
        />

      </div>

      <p className="mt-8 max-w-xl text-lg text-gray-400 leading-9">
        Passionate MERN Stack Developer focused on building modern,
        scalable and high-performance web applications with premium UI.
      </p>

      <div className="flex flex-wrap gap-5 mt-12">

        <a
          href="/Ankur_Patel_Resume.pdf"
          download
          className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition hover:scale-105 shadow-xl shadow-cyan-500/30"
        >
          Download Resume
        </a>

        <a
          href="#contact"
          className="px-8 py-4 rounded-xl border border-cyan-500 hover:bg-cyan-500 transition hover:scale-105"
        >
          Hire Me
        </a>

      </div>

      <div className="flex gap-5 mt-10">

        <a
          href="#"
          className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="#"
          className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center hover:text-blue-400 hover:border-blue-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="#"
          className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center hover:text-pink-500 hover:border-pink-500 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="#"
          className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center hover:text-red-500 hover:border-red-500 transition"
        >
          <FaEnvelope />
        </a>

      </div>
    </motion.div>
  );
};

export default HeroContent;