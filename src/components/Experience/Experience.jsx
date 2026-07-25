import { motion } from "framer-motion";
import ExperienceBackground from "./ExperienceBackground";
import Timeline from "./Timeline";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#08111F] py-10 text-white"
    >
      {/* Background */}
      <ExperienceBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            My Journey
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-bold">
            Work{" "}
            <span className="text-cyan-400">
              Experience
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            My journey as a MERN Stack Developer through internships,
            freelance work and real-world full-stack projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent opacity-40"></div>

          <Timeline />

        </div>

      </div>
    </section>
  );
};

export default Experience;