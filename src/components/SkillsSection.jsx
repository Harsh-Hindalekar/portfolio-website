import React, { useState } from "react";
import { SkillLogo } from "./SkillLogos";
import { skills } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Layers, Database, Code, Cpu, Trophy, CircleHelp } from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "programming", label: "Languages" },
    { id: "library", label: "Libraries / Frameworks" },
    { id: "database", label: "Databases" },
    { id: "tools", label: "Tools" },
    { id: "concepts", label: "Core Concepts" }
  ];

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === "all") return true;
    return skill.category === activeCategory;
  });

  const getCategoryIcon = (catId) => {
    switch (catId) {
      case "programming":
        return <Code className="w-3.5 h-3.5" />;
      case "library":
        return <Layers className="w-3.5 h-3.5" />;
      case "database":
        return <Database className="w-3.5 h-3.5" />;
      case "tools":
        return <Cpu className="w-3.5 h-3.5" />;
      case "concepts":
        return <Trophy className="w-3.5 h-3.5" />;
      default:
        return <Layers className="w-3.5 h-3.5" />;
    }
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill?.name === skill.name ? null : skill);
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mockup Topic Head tag */}
        <div className="space-y-4 mb-20 text-center">
          <div className="inline-flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-bold tracking-widest uppercase font-mono">
            <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
            Section 03 / Stack & Tech Skills
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
            Comprehensive <span className="font-normal italic text-slate-400 font-serif">Workspace Stack</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-505 dark:text-slate-400 font-sans">
            Filtered stack components representing my fluency across programming backends, frontend render layout systems, databases, and general tools.
          </p>
        </div>

        {/* Categories Tab Selector bar matching Excalidraw mockup */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`tab-skill-${cat.id}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedSkill(null);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "bg-slate-50 border border-slate-100 hover:border-slate-205 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-slate-705 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              {cat.id !== "all" && getCategoryIcon(cat.id)}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Rounds Skill List matching sketch style */}
        <div className="relative min-h-[300px] border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0f172a]/20 rounded-3xl p-8 lg:p-12">
          <div className="absolute top-3 left-4 font-mono text-[9px] text-zinc-400 dark:text-slate-600 pl-2 pointer-events-none">
            [STACKNODES: ENGAGED LAYERS]
          </div>
          
          <motion.div 
            layout
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => {
                const isSelected = selectedSkill?.name === skill.name;
                return (
                  <motion.button
                    key={skill.name}
                    layout
                    id={`skill-${skill.name.toLowerCase().replace(/[^a-z]/g, "")}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    onClick={() => handleSkillClick(skill)}
                    className="group relative flex flex-col items-center justify-center cursor-pointer outline-none"
                  >
                    {/* Circle Node boundary */}
                    <div 
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border-2 bg-white dark:bg-slate-900 shadow-xs transition-all duration-300 group-hover:scale-105 ${
                        isSelected 
                          ? "border-slate-900 bg-white dark:border-white scale-105 shadow-sm" 
                          : "border-slate-100 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700"
                      }`}
                    >
                      <SkillLogo name={skill.name} className="w-10 h-10 object-contain p-0.5" />
                      
                      {/* Active green point indicators */}
                      {isSelected && (
                        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-slate-900 dark:bg-white"></span>
                        </span>
                      )}
                    </div>

                    <span className="mt-3 font-mono text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-350 tracking-wide text-center uppercase group-hover:text-slate-905 transition-colors">
                      {skill.name}
                    </span>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Interactive expansion box for selected skill */}
          <AnimatePresence>
            {selectedSkill && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="mt-12 mx-auto max-w-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7">
                      <SkillLogo name={selectedSkill.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-sans font-extrabold text-sm text-slate-950 dark:text-slate-50 uppercase tracking-tight">
                        {selectedSkill.name} Stack Spec
                      </h4>
                      <p className="font-mono text-[9px] text-slate-400 uppercase tracking-widest leading-none font-bold">
                        Fluency Score: {selectedSkill.score}%
                      </p>
                    </div>
                  </div>
                  <span className="font-sans text-xs font-bold uppercase text-slate-550 dark:text-slate-300">
                    {selectedSkill.category.toUpperCase()}
                  </span>
                </div>

                {/* Score bar */}
                <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-850 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedSkill.score}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="h-full bg-slate-900 dark:bg-white rounded-full"
                  />
                </div>

                <p className="mt-3 text-[11px] font-sans text-slate-550 dark:text-slate-400 text-center leading-relaxed">
                  Active implementation node in JavaScript & Node runtime ecosystems. Optimized for mobile/desktop fluid responsiveness.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Quick prompt guide detail */}
        <p className="mt-4 text-center font-mono text-[9px] text-slate-400 uppercase tracking-widest">
          💡 Click round nodes to inspect engineering proficiency levels
        </p>
        
      </div>
    </section>
  );
}
