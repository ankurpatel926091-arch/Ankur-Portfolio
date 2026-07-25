import { motion } from "framer-motion";
import StatsCard from "./StatsCard";

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Heading */}
      <div>
        <span className="text-cyan-400 uppercase tracking-[4px] font-semibold">
          About Me
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          Passionate{" "}
          <span className="text-cyan-400">
            MERN Stack
          </span>{" "}
          Developer
        </h2>
      </div>

      {/* Description */}
      <p className="text-gray-400 leading-8 text-lg">
        Hi, I'm <span className="text-white font-semibold">Ankur Patel</span>,
        a passionate Full Stack MERN Developer from Lucknow.

        I love building modern, responsive and scalable web applications
        using React, Node.js, Express and MongoDB.

        My focus is to create clean UI, smooth user experience and
        production-ready applications.
      </p>

      {/* Information */}
      <div className="grid sm:grid-cols-2 gap-6">

        <div className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-5">
          <h3 className="text-cyan-400 font-semibold mb-2">
            🎓 Education
          </h3>

          <p className="text-gray-300">
            B.Tech (Computer Science)
          </p>

          <p className="text-gray-500 text-sm">
            BSSITM, Lucknow
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-5">
          <h3 className="text-cyan-400 font-semibold mb-2">
            💼 Internship
          </h3>

          <p className="text-gray-300">
            Full Stack MERN Developer
          </p>

          <p className="text-gray-500 text-sm">
            DigiCoder Technologies
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-5">
          <h3 className="text-cyan-400 font-semibold mb-2">
            📍 Location
          </h3>

          <p className="text-gray-300">
            Lucknow, Uttar Pradesh
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-5">
          <h3 className="text-cyan-400 font-semibold mb-2">
            🚀 Available For
          </h3>

          <p className="text-gray-300">
            Full Time • Internship • Freelance
          </p>
        </div>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        <StatsCard
          number="10+"
          title="Projects"
        />

        <StatsCard
          number="1+"
          title="Experience"
        />

        <StatsCard
          number="15+"
          title="Technologies"
        />

        <StatsCard
          number="100%"
          title="Responsive"
        />

      </div>
    </motion.div>
  );
};

export default AboutContent;