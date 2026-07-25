import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <AnimatePresence>

      {isOpen && project && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center p-6"
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={{
              duration: 0.35,
            }}
            className="relative w-full max-w-4xl rounded-3xl bg-[#0B1120] border border-cyan-500/20 overflow-hidden shadow-[0_0_50px_rgba(34,211,238,.15)]"
          >

            {/* Close */}

            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-red-500 transition flex items-center justify-center"
            >
              <FaTimes />
            </button>

            {/* Image */}

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-8">

              <h2 className="text-4xl font-bold text-white">
                {project.title}
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                {project.description}
              </p>

              {/* Tech */}

              <div className="flex flex-wrap gap-3 mt-8">

                {project.tech.map((item) => (

                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300"
                  >
                    {item}
                  </span>

                ))}

              </div>

              {/* Buttons */}

              <div className="flex gap-5 mt-10">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition"
                >
                  <FaGithub />

                  GitHub

                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-500 transition"
                >
                  <FaExternalLinkAlt />

                  Live Demo

                </a>

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
};

export default ProjectModal;