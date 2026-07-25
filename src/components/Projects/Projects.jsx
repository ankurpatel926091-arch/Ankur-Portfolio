import { motion } from "framer-motion";
import { useState } from "react";

import ProjectsBackground from "./ProjectsBackground";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

import ProjectModal from "../ProjectModal/ProjectModal";

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  return (
    <section
      id="projects"
      className="relative py-20 bg-[#08111F] overflow-hidden text-white"
    >
      {/* Background */}

      <ProjectsBackground />

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
            My Work
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            Here are some of my featured MERN Stack projects showcasing
            responsive UI, backend development, authentication,
            dashboards and real-world application development.
          </p>
        </motion.div>

        {/* Projects */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <ProjectCard
                project={project}
                onClick={() => openModal(project)}
              />
            </motion.div>

          ))}

        </div>

      </div>

      {/* Project Modal */}

      <ProjectModal
        project={selectedProject}
        isOpen={isOpen}
        onClose={closeModal}
      />

    </section>
  );
};

export default Projects;