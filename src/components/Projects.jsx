import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, Filter, FolderKanban, Check, X, ShieldAlert, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'React', 'UI/UX', 'Landing Pages'];

  const filteredProjects = activeCategory === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === activeCategory);

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-24 px-4 md:px-8 bg-transparent overflow-hidden"
    >
      {/* Background visual nodes */}
      <div className="absolute top-1/3 left-10 h-[380px] w-[380px] rounded-full bg-purple-900/5 blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 right-10 h-[380px] w-[380px] rounded-full bg-blue-900/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="font-mono text-xs tracking-[0.25em] text-fuchsia-400 uppercase bg-white/3 px-3.5 py-1.5 rounded-full border border-white/10">
            Case Studies
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-4">
            Custom Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-indigo-300 to-cyan-400">Applications</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Dynamic Category Navigation Panel */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-16" id="projects-filter-bar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 focus:outline-none flex items-center gap-2 ${
                  isActive 
                    ? "text-white" 
                    : "text-gray-400 hover:text-white bg-white/3 border border-white/10"
                }`}
                id={`filter-btn-${cat.toLowerCase().replace(" ", "-")}`}
              >
                <Filter className="h-3.5 w-3.5 text-gray-500" />
                <span>{cat}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-project-nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full -z-10 shadow-md shadow-purple-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Layout Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          id="projects-display-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                whileHover={{ y: -6 }}
                className="glass-card group flex flex-col h-full overflow-hidden shadow-xl"
                id={`project-card-${project.id}`}
              >
                {/* Visual Header Illustration Area (Replaces broken image placeholders with premium custom CSS designs!) */}
                <div className={`h-48 relative overflow-hidden bg-gradient-to-tr ${project.accentColor} p-6 flex flex-col justify-between`}>
                  
                  {/* Subtle Background Circuit Mesh */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                  {/* Top utility pill inside preview */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="font-mono text-[9px] tracking-widest text-[#050508] bg-white/90 px-3 py-1 rounded-full uppercase font-extrabold shadow-sm">
                      {project.category}
                    </span>
                    <FolderKanban className="h-5 w-5 text-[#050508] opacity-70" />
                  </div>

                  {/* Core Preview Graphic representing the project's concept */}
                  <div className="flex items-center justify-center h-24 relative z-10">
                    <div className="p-4 rounded-2xl bg-[#050508]/40 backdrop-blur-xl border border-white/10 shadow-lg group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-center">
                      <span className="font-sans text-xs font-black tracking-wider text-white uppercase text-center select-none line-clamp-2">
                        {project.title.split(" ").slice(0, 3).join(" ")}
                      </span>
                    </div>
                  </div>

                  {/* Sliding Gradient Wave accent */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-white/30 to-white/10 opacity-70" />
                </div>

                {/* Card Text Content Details */}
                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <div>
                    <h3 className="font-sans text-lg font-extrabold text-white group-hover:text-purple-300 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 font-light mt-2 line-clamp-3 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    {/* Tech Badges Row */}
                    <div className="flex flex-wrap gap-1 mb-6">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="font-mono text-[9px] text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="font-mono text-[9px] text-purple-400 bg-purple-500/10 border border-purple-500/15 px-2 py-1 rounded-full uppercase tracking-wider">
                          +{project.tech.length - 3} More
                        </span>
                      )}
                    </div>

                    {/* Footer Call-to-actions */}
                    <div className="flex items-center gap-2 border-t border-white/10 pt-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-grow py-2.5 rounded-xl bg-purple-600/15 hover:bg-purple-600 hover:text-white border border-purple-500/15 text-purple-300 font-semibold text-xs tracking-wide transition-all duration-300 cursor-pointer"
                      >
                        Deep Dive
                      </button>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300"
                        title="GitHub Repository"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Selected Project Full Detailed Modal Slide-Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Backing Dark Glass Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Modal Card content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-3xl rounded-3xl bg-[#050505]/95 border border-white/10 overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col text-left backdrop-blur-2xl"
                id="project-detail-modal"
              >
                {/* Close Button top corner */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 border border-white/10 text-gray-400 hover:text-white transition-colors hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Banner illustration inside modal */}
                <div className={`h-40 md:h-48 relative overflow-hidden bg-gradient-to-r ${selectedProject.accentColor} p-6 flex flex-col justify-end`}>
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.08]" />
                  <div className="absolute top-6 left-6 block">
                    <span className="font-mono text-[9px] tracking-widest text-[#050508] bg-white px-3 py-1 rounded-full uppercase font-bold shadow">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="font-sans text-2xl md:text-3xl font-black text-white tracking-tight relative z-10">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Body Scrolling Content panels */}
                <div className="p-6 md:p-8 overflow-y-auto flex-grow flex flex-col gap-6">
                  
                  {/* Long descriptive summaries */}
                  <div>
                    <h4 className="font-mono text-xs text-purple-400 uppercase tracking-widest font-semibold mb-2 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" /> Concept Summary
                    </h4>
                    <p className="font-sans text-sm text-gray-300 font-light leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Core engineering features */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider mb-3">Key Features Matrix</h4>
                    <ul className="flex flex-col gap-2">
                       {selectedProject.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                          <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack complete view */}
                  <div>
                    <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider mb-2">Technologies Deployed</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span key={t} className="font-mono text-[10px] text-indigo-300 bg-purple-500/20 border border-purple-500/10 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer panel buttons */}
                <div className="p-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3 bg-[#050505]/60 backdrop-blur-md">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4 text-purple-400" />
                    <span>View Repository Ledger</span>
                  </a>
                  
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-xs tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-purple-500/10 hover:shadow-purple-500/25"
                  >
                    <ExternalLink className="h-4 w-4 text-purple-200" />
                    <span>Launch Live Simulation</span>
                  </a>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
