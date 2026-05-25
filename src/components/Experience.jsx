import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, GraduationCap, Milestone, CheckCircle, Award } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const journey = portfolioData.experience;

  const timelineIcons = {
    exp1: <Briefcase className="h-4 w-4 text-purple-400" />,
    exp2: <Award className="h-4 w-4 text-blue-400" />,
    exp3: <GraduationCap className="h-4 w-4 text-cyan-400" />
  };

  return (
    <section 
      id="experience" 
      className="relative min-h-screen py-24 px-4 md:px-8 bg-transparent overflow-hidden"
    >
      {/* Ambient glowing blobs */}
      <div className="absolute top-1/2 left-10 h-[300px] w-[300px] bg-purple-900/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 h-[350px] w-[350px] bg-indigo-900/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-indigo-400 uppercase bg-white/3 px-3.5 py-1.5 rounded-full border border-white/10 animate-pulse">
            Journey Timeline
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-4">
            My Professional & Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Chronicle</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Vertical Timeline Structure Container */}
        <div className="relative mt-20 max-w-4xl mx-auto">
          
          {/* Central Vertical Connector Line (Hidden on tiny viewports or aligned left) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/80 via-indigo-500/50 to-blue-500/20 -translate-x-[1px]" />

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-12 md:gap-16">
            {journey.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  id={`timeline-node-${item.id}`}
                >
                  
                  {/* Central Node Indicator with Pulsing Core */}
                  <div className="absolute left-4 md:left-1/2 top-6 h-4 w-4 rounded-full bg-[#050505] border-2 border-purple-500 -translate-x-[7px] z-10 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-purple-400 to-blue-400 animate-pulse" />
                    <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-[4px] animate-ping" />
                  </div>

                  {/* Left Side (Spacing block or aligned content dependent on parity) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Right Side / Active Content panel */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-10 md:pr-10">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                      className="glass-card p-6 relative text-left group hover:scale-[1.01]"
                    >
                      {/* Subtle floating glow tag */}
                      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent group-hover:via-purple-500/40 transition-all duration-500" />

                      {/* Header row details */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-1.5 text-xs text-purple-400 font-mono font-medium">
                          <Calendar className="h-3.5 w-3.5 text-purple-500" />
                          <span>{item.year}</span>
                        </div>

                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all text-purple-400">
                          {timelineIcons[item.id] || <Milestone className="h-4 w-4" />}
                        </div>
                      </div>

                      <h3 className="font-sans text-base sm:text-lg font-black text-white leading-tight">
                        {item.title}
                      </h3>
                      
                      <h4 className="font-sans text-xs text-indigo-300 font-bold mt-1">
                        {item.subtitle}
                      </h4>

                      <p className="font-sans text-xs text-gray-400 leading-relaxed font-light mt-3">
                        {item.description}
                      </p>

                      <div className="h-[1px] w-full bg-white/10 mt-5 mb-4" />

                      {/* Timeline Skills/Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="font-mono text-[9px] text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
