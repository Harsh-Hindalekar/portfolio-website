import React from "react";
import { motion } from "motion/react";
import { projects } from "../data";
import { FolderGit2, Github, ExternalLink, Code2 } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-[#F8FAFC] dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topic Head and Header for projects section */}
        <div className="space-y-4 mb-20 text-center">
          <div className="inline-flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-bold tracking-widest uppercase font-mono">
            <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
            Section 04 / Project Showcase
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none animate-fade-in">
            Featured <span className="font-normal italic text-slate-400 font-serif">Engineering</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-slate-505 dark:text-slate-400 font-sans">
            A selective group of functional systems engineered with modern state management, responsive grids, and performant backends.
          </p>
        </div>

        {/* Responsive layout containing card systems with clean white background & rounded-3xl corners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-md transition-all duration-300"
            >
              {/* Corner crosshairs mirroring classic blueprints / "AI-free" technical schematic styling */}
              <div className="absolute top-4 right-4 font-mono text-[9px] text-slate-400 dark:text-slate-600 font-semibold group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                [CASE_0{idx + 1}]
              </div>

              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-100 dark:border-slate-700 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-all duration-350">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="font-mono text-[10px] uppercase font-bold text-slate-400">
                        {project.role}
                      </span>
                      <span className="text-[10px] text-slate-300 dark:text-slate-705">•</span>
                      <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400">
                        {project.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bullets highlighting features */}
                <ul className="space-y-3 pt-2">
                  {project.highlights.map((bullet, bidx) => (
                    <li key={bidx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-350 leading-relaxed">
                      <span className="text-slate-400 dark:text-slate-600 font-mono font-bold mt-1">›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies list & Action Buttons */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                {/* Skill badges matching design HTML rounded-full text-slate-600 */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="px-3 py-1 bg-slate-50 border border-slate-100 dark:bg-slate-800 dark:border-slate-700 rounded-full text-[10px] font-semibold text-slate-600 dark:text-slate-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link actions */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
                    <Code2 className="w-3.5 h-3.5 text-slate-300" />
                    <span>VANILLA ENVIRONMENT</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-750 hover:bg-slate-50 rounded-full text-slate-700 dark:text-slate-300 font-sans text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                    {project.title !== "Document Reader Application" && idx !== 2 && (
                      <a
                        href={project.demo} 
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 rounded-full text-white dark:text-slate-900 font-sans text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
