import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { HiSearch, HiX } from "react-icons/hi";

import ProjectsBackground from "./ProjectsBackground";
import ProjectCard from "./ProjectCard";
import { projects, categories } from "../../data/projects";
import ProjectModal from "../ProjectModal/ProjectModal";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
      className="relative py-24 bg-[#08111F] overflow-hidden text-white"
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
          className="text-center mb-14"
        >
          <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            My Work
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-400 leading-relaxed">
            Explore my latest MERN Stack applications, responsive full-stack solutions,
            and interactive user interfaces. Use categories or search to filter projects.
          </p>
        </motion.div>

        {/* Filter Controls Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-[#0F172A]/80 border border-cyan-500/20 p-4 md:p-5 rounded-2xl backdrop-blur-xl shadow-xl"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.4)] scale-105"
                    : "bg-gray-800/80 text-gray-300 hover:text-cyan-400 hover:bg-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Real-time Search Box */}
          <div className="relative w-full md:w-72">
            <HiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title or tech..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-gray-900/90 border border-cyan-500/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <HiX />
              </button>
            )}
          </div>
        </motion.div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-6 px-1">
          <span>
            Showing <strong className="text-cyan-400">{filteredProjects.length}</strong> of {projects.length} projects
          </span>
          {(selectedCategory !== "All" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-cyan-400 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-[#0F172A]/40 rounded-2xl border border-dashed border-cyan-500/20">
            <p className="text-gray-400 text-lg mb-4">No projects match your current search criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              Clear Search &amp; Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => openModal(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;