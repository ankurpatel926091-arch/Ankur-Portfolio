import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        rotateX: 5,
        rotateY: -5,
        scale: 1.02,
      }}
      transition={{ duration: 0.35 }}
      onClick={onClick}
      className="group cursor-pointer rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-500 shadow-xl hover:shadow-cyan-500/20"
    >
      {/* Image */}

      <div className="relative h-60 overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#08111F] via-black/20 to-transparent opacity-80"></div>

      </div>

      {/* Content */}

      <div className="p-7">

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-7 mt-4">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-3 mt-6">

          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-500 transition"
          >
            <FaGithub />
            GitHub
          </a>

        </div>

      </div>

    </motion.div>
  );
};

export default ProjectCard;