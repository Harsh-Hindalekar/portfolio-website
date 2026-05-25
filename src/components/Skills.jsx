import React from "react";
import { motion } from "motion/react";
import { Cpu, CheckCircle, Flame, Star, Layers, Command, Zap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const categories = portfolioData.skills;

  // Icons used for standard badges
  const badgeIcons = {
    "React.js": <Cpu className="h-4 w-4 text-purple-400 rotate-spinning" />,
    "JavaScript (ES6+)": <Zap className="h-4 w-4 text-amber-400" />,
    "Tailwind CSS": <Flame className="h-4 w-4 text-cyan-400" />,
    "Framer Motion": <Layers className="h-4 w-4 text-pink-400" />,
    "HTML5 / CSS3": <Command className="h-4 w-4 text-red-400" />
  };

  // Tech items for infinite sliding marquee
  const marqueeItems = [
    "REACT.JS", "TAILWIND CSS", "FRAMER MOTION", "JAVASCRIPT", "TYPESCRIPT",
    "RECHARTS", "FIGMA DESIGN", "GIT & GITHUB", "REST APIS", "CSS GRID",
    "UI DESIGN", "RESPONSIVE LAYOUTS", "VITE", "NODE EXPRESS"
  ];

  return (
    <section 
      id="skills" 
      className="relative min-h-screen py-24 px-4 md:px-8 bg-transparent overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 h-[450px] w-[450px] rounded-full bg-blue-900/5 blur-[130px]" />
      <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] rounded-full bg-purple-900/5 blur-[130px] animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-blue-400 uppercase bg-white/3 px-3.5 py-1.5 rounded-full border border-white/10">
            Skills Inventory
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-4">
            Technical Arsenal & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Weaponry</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Categories Split Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: catIdx * 0.15, duration: 0.6 }}
              className="glass-card p-6 flex flex-col relative overflow-hidden group hover:scale-[1.01]"
              id={`skills-cat-${catIdx}`}
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Star className="h-4 w-4" />
                </div>
                <h3 className="font-sans text-lg font-bold text-white tracking-tight">{category.title}</h3>
              </div>

              <div className="flex flex-col gap-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={skill.name} className="flex flex-col text-left">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-sans text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                        {badgeIcons[skill.name] || <CheckCircle className="h-3.5 w-3.5 text-gray-500" />}
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] text-purple-400 font-bold">{skill.percentage}%</span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="h-[6px] w-full bg-white/5 rounded-full overflow-hidden relative border-b border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: sIdx * 0.05 }}
                        className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Tech Stock Marquee Showcase */}
        <div className="mt-20 relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050505] to-transparent z-10" />
          
          <div className="py-6 rounded-2xl bg-white/3 border border-white/10 backdrop-blur-md overflow-hidden flex items-center">
            {/* Smooth linear scrolling using custom CSS-like movement inside marquee tracks */}
            <div className="flex gap-12 whitespace-nowrap animate-marquee">
              {/* List 1 */}
              {marqueeItems.concat(marqueeItems).map((tag, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-gray-500 hover:text-purple-400 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-550 inline-block fill-purple-400 animate-pulse bg-purple-500/60" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
