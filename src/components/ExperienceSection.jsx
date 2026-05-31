import React from "react";
import { motion } from "motion/react";
import { experiences } from "../data";
import { Briefcase, MapPin, Sparkles, FolderKanban, ShieldAlert, LineChart } from "lucide-react";

export default function ExperienceSection() {
  const stats = [
    {
      icon: FolderKanban,
      number: "1+",
      label: "Industries Served",
      desc: "Delivering custom frontend and data-visual designs."
    },
    {
      icon: ShieldAlert,
      number: "100+",
      label: "QA Cases Run",
      desc: "Conducting granular correctness sweeps on logic blocks."
    },
    {
      icon: LineChart,
      number: "60%",
      label: "Engagement Increase",
      desc: "Through responsive, fluid interactive layouts."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-4 mb-20 text-center">
          <div className="inline-flex items-center gap-2 text-slate-450 dark:text-slate-500 text-xs font-bold tracking-widest uppercase font-mono">
            <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
            Section 05 / Professional Milestones
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none font-sans">
            Work <span className="font-normal italic text-slate-400 font-serif">History & Impact</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-500 dark:text-slate-400 font-sans">
            Collaborating with active engineering groups to ship compliant modules, conduct manual verification, and design high-performing templates.
          </p>
        </div>

        {/* Major Grid Alignment Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Internship Metrics & Stats (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-3">
              <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-semibold">
                [IMPACT_NODE]
              </span>
              <h3 className="font-sans font-extrabold text-xl text-slate-900 dark:text-white uppercase tracking-tight">
                Quantitative Impact
              </h3>
              <p className="text-slate-650 dark:text-slate-400 text-xs leading-relaxed font-sans">
                A brief breakdown of qualitative targets completed and performance goals achieved during industrial training internships and self-led engineering tasks.
              </p>
            </div>

            {/* Symmetrical vertical stats list */}
            <div className="space-y-5">
              {stats.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex p-5 border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 rounded-2xl items-center gap-4 hover:border-slate-200 transition-colors"
                  >
                    <div className="p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-100 dark:border-slate-800 rounded-xl shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-sans font-extrabold text-lg text-slate-950 dark:text-white leading-none">
                          {item.number}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Career Timeline Card (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="p-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-lg">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-slate-900 dark:text-white uppercase tracking-tight">
                Work History
              </h3>
            </div>

            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl shadow-xs hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-sm transition-all duration-300"
              >
                {/* Micro design element indicating current live node */}
                <span className="absolute top-4 right-4 flex h-3 w-3 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-450 dark:bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-slate-900 dark:bg-emerald-400"></span>
                </span>

                <div className="space-y-5">
                  
                  {/* Card head metadata */}
                  <div className="border-b border-slate-50 dark:border-slate-850 pb-4">
                    <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-350 tracking-wider">
                      {exp.period}
                    </span>

                    <h4 className="font-sans font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white mt-3 leading-tight">
                      {exp.role}
                    </h4>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-bold">{exp.company}</span>
                      <span className="text-slate-200 dark:text-slate-800">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Descriptions bullets */}
                  <ul className="space-y-4">
                    {exp.bulletPoints.map((bullet, bidx) => (
                      <li key={bidx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                        <span className="text-slate-400 dark:text-slate-650 font-mono font-bold mt-0.5">›</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badge block */}
                  <div className="pt-4 border-t border-slate-50 dark:border-slate-850">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest mr-2 font-bold select-none">[TECH_STACK]:</span>
                      {exp.technologies.map((tech, tidx) => (
                        <span key={tidx} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-semibold text-slate-605 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
