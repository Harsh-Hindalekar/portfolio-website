import React from "react";
import { motion } from "motion/react";
import { personalInfo, education } from "../data";
import { GraduationCap, MapPin, Calendar, Award, Compass, Heart, Shield } from "lucide-react";

export default function AboutSection() {
  const philosophies = [
    {
      icon: Compass,
      title: "Clean Logic First",
      desc: "Every line of code should serve a direct purpose. I focus on modular, dry, and lightweight architectures."
    },
    {
      icon: Heart,
      title: "Human Centric",
      desc: "Websites should be functional and gorgeous to look at. I believe in balanced grids, clean fonts, and visual negative spaces."
    },
    {
      icon: Shield,
      title: "Continuous Growth",
      desc: "I love exploring state architectures, performance optimization and resolving complicated visual layout problems."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-4 mb-20 text-center">
          <div className="inline-flex items-center gap-2 text-slate-450 dark:text-slate-500 text-xs font-bold tracking-widest uppercase font-mono">
            <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
            Section 02 / Biography & Academics
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
            About <span className="font-normal italic text-slate-400 font-serif">Harsh Hindalekar</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-500 dark:text-slate-400 font-sans">
            Detail-oriented junior developer committed to web precision, clean computational layouts, and rigid standard-based engineering.
          </p>
        </div>

        {/* Modular Grid Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Side: Intro & Professional Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-semibold">
                [INTRO_NODE_01]
              </span>
              <h3 className="font-sans font-extrabold text-xl text-slate-900 dark:text-white uppercase tracking-tight">
                Engineering Journey
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                {personalInfo.about}
              </p>
            </div>

            {/* Core Values stack */}
            <div className="space-y-6 pt-4">
              <h4 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest font-semibold">
                Core Workspace Values
              </h4>
              <div className="space-y-4">
                {philosophies.map((phil, idx) => {
                  const Icon = phil.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex gap-4 p-4 border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 rounded-2xl"
                    >
                      <div className="p-2 bg-white dark:bg-slate-900 text-slate-950 dark:text-white border border-slate-100 dark:border-slate-850 rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="font-sans font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider">
                          {phil.title}
                        </h5>
                        <p className="text-slate-555 dark:text-slate-400 text-xs leading-relaxed mt-1">
                          {phil.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Academic History timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="p-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-lg">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-slate-900 dark:text-white uppercase tracking-tight">
                Academic Details
              </h3>
            </div>

            {/* Interactive Timeline nodes */}
            <div className="relative border-l-2 border-slate-100 dark:border-slate-800 pl-6 sm:pl-8 space-y-10 ml-4 py-2">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="relative group"
                >
                  {/* Timeline point accent */}
                  <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex h-4 w-4 bg-white dark:bg-slate-900 items-center justify-center rounded-full border-2 border-slate-900 dark:border-white transition-all duration-300 group-hover:scale-125">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900 dark:bg-white transition-all group-hover:bg-indigo-500" />
                  </span>

                  {/* Card Wrapper with nice high-level shadow */}
                  <div className="p-6 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl shadow-xs hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-xs transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-3 py-1 bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-350 rounded-full tracking-wider uppercase font-mono">
                        {edu.period}
                      </span>
                      {edu.grade && (
                        <span className="bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-mono text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                          {edu.grade}
                        </span>
                      )}
                    </div>

                    <h4 className="font-sans font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
                      {edu.degree}
                    </h4>

                    <p className="font-sans text-xs text-slate-505 dark:text-slate-400 font-semibold mt-1 flex items-center gap-1">
                      <span>{edu.institution}</span>
                    </p>

                    <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-slate-400 mt-3 border-t border-slate-50 dark:border-slate-850/50 pt-2.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-350" />
                      <span>{edu.location}, Maharashtra</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Design statement footer */}
            <div className="relative border border-slate-100 dark:border-slate-800 bg-white dark:bg-[#0f172a]/20 p-6 sm:p-8 rounded-3xl">
              <div className="flex items-center gap-3.5 mb-2">
                <span className="text-xl">🎓</span>
                <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-0.5">Academic Promise</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans mt-1">
                Graduated with a BSc IT degree (8.8 CGPA) in Mumbai, developing state management systems, modular reactive component interfaces, and rigorous algorithms designed for real-world integration.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
