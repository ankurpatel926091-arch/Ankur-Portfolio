import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onClick={onClick}
      className="group relative cursor-pointer h-full flex flex-col justify-between rounded-2xl overflow-hidden bg-[#0F172A]/90 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/80 transition-all duration-500 shadow-xl hover:shadow-[0_12px_40px_rgba(34,211,238,0.25)]"
    >
      {/* Top Animated Accent Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

      {/* Top Image Container */}
      <div>
        <div className="relative h-56 sm:h-60 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Base Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-black/20 to-transparent opacity-90"></div>

          {/* Hover Shimmer Light Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          {/* Category Badge */}
          {project.category && (
            <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-cyan-400/30 group-hover:border-cyan-400/70 text-cyan-300 text-xs font-semibold tracking-wide shadow-md transition-colors duration-300">
              {project.category}
            </span>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1 flex items-center justify-between">
            <span>{project.title}</span>
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-3 line-clamp-3 min-h-[60px] group-hover:text-gray-300 transition-colors duration-300">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-medium group-hover:border-cyan-400/40 group-hover:bg-cyan-500/20 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="p-6 sm:p-7 pt-0">
        <div className="flex gap-3 pt-4 border-t border-cyan-500/10 group-hover:border-cyan-500/30 transition-colors duration-300">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl bg-cyan-500 text-black hover:bg-cyan-400 transition text-xs sm:text-sm font-semibold shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/40"
          >
            <FaExternalLinkAlt className="text-xs" />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition text-xs sm:text-sm font-semibold"
          >
            <FaGithub className="text-sm" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;