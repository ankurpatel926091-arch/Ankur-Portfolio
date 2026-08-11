import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaFilePdf
} from "react-icons/fa";
import { motion } from "framer-motion";

const HeroContent = ({ onOpenResume }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="z-20"
    >
      <p className="inline-flex items-center gap-2 text-cyan-400 font-semibold tracking-widest uppercase">
        👋 Hello I&apos;m
      </p>

      <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-black leading-tight">
        <span className="text-white">Ankur</span>
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

      <p className="mt-8 max-w-xl text-lg text-gray-400 leading-[2.2rem]">
        Passionate MERN Stack Developer focused on building modern,
        scalable and high-performance web applications with premium UI.
      </p>

      <div className="flex flex-wrap items-center gap-5 mt-10">
        <button
          onClick={onOpenResume}
          className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition hover:scale-105 shadow-xl shadow-cyan-500/30 cursor-pointer text-sm"
        >
          <FaFilePdf className="text-base" />
          <span>View / Download Resume</span>
        </button>

        <a
          href="#contact"
          className="px-7 py-3.5 rounded-xl border border-cyan-500 text-cyan-300 hover:bg-cyan-500/10 transition hover:scale-105 font-semibold text-sm"
        >
          Hire Me 🚀
        </a>
      </div>

      <div className="flex gap-4 mt-10">
        <a
          href="https://github.com/ankurpatel926091-arch/"
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition"
          title="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/ankur285/"
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center text-gray-300 hover:text-blue-400 hover:border-blue-400 transition"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/ankurpatel9146/"
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center text-gray-300 hover:text-pink-500 hover:border-pink-500 transition"
          title="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="mailto:ankurpatel926091@gmail.com"
          className="w-11 h-11 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center text-gray-300 hover:text-red-400 hover:border-red-400 transition"
          title="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </motion.div>
  );
};

export default HeroContent;