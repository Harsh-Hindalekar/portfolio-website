import React from "react";
import { motion } from "motion/react";
import { Sparkles, Trophy, BookOpen, Clock, Code, Award, CheckCircle } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { personal } = portfolioData;

  const statIcons = {
    projects: <Trophy className="h-5 w-5 text-purple-400" />,
    tech: <Code className="h-5 w-5 text-blue-400" />,
    designs: <Award className="h-5 w-5 text-fuchsia-400" />,
    experience: <Clock className="h-5 w-5 text-cyan-400" />
  };

  return (
    <section 
      id="about" 
      className="relative min-h-screen py-24 px-4 md:px-8 bg-transparent overflow-hidden"
    >
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-0 h-[350px] w-[350px] rounded-full bg-indigo-900/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-900/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-purple-400 uppercase bg-white/3 px-3.5 py-1.5 rounded-full border border-white/10">
            About Harsh's Path
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-4">
            Translating Engineering Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">Tactical Layouts</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Story / Objectives / Journey */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left">
            <div>
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-400" />
                {personal.aboutHeading}
              </h3>
              <p className="font-sans text-sm sm:text-base text-gray-400 font-light leading-relaxed mt-4">
                {personal.aboutJourney}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/3 border border-white/10 backdrop-blur-md shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-purple-600 to-indigo-600" />
              <h4 className="font-mono text-xs text-purple-300 uppercase tracking-widest font-semibold">Career Objective</h4>
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed mt-2 font-light">
                {personal.careerObjective}
              </p>
            </div>

            {/* Education Summary Cards */}
            <div className="flex flex-col gap-4">
              <h4 className="font-mono text-xs text-gray-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-400" /> Education & Groundwork
              </h4>
              
              <div className="flex flex-col gap-4">
                {portfolioData.education?.map((edu, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/3 border border-white/10 hover:border-purple-500/20 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] text-purple-400 uppercase tracking-widest bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/10">
                          {edu.duration}
                        </span>
                        <span className="font-mono text-[10px] text-gray-500">{edu.location}</span>
                      </div>
                      <p className="font-sans text-sm font-bold text-white mt-1.5">{edu.institution}</p>
                      <p className="font-sans text-xs text-indigo-300 font-medium mt-1">{edu.degree}</p>
                      <p className="font-sans text-xs text-gray-400 font-light mt-1.5">{edu.details}</p>
                    </div>
                    {edu.gpa && (
                      <div className="self-start sm:self-center px-3 py-1.5 rounded-xl bg-white/3 border border-white/10 text-xs font-mono text-purple-300 shrink-0 select-none">
                        Score: {edu.gpa}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Credentials & Merits Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <h4 className="font-mono text-xs text-gray-400 uppercase tracking-widest font-semibold flex items-center gap-2 mb-3">
                  <Award className="h-4 w-4 text-purple-400" /> Certifications
                </h4>
                {portfolioData.certifications?.map((cert, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/3 border border-white/10 hover:border-purple-500/20 transition-all duration-300 relative overflow-hidden group">
                    <p className="font-sans text-xs font-bold text-white group-hover:text-purple-300 transition-colors">{cert.name}</p>
                    <p className="font-mono text-[9px] text-gray-500 mt-1 uppercase tracking-wider">{cert.provider}</p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-mono text-xs text-gray-400 uppercase tracking-widest font-semibold flex items-center gap-2 mb-3">
                  <Trophy className="h-4 w-4 text-fuchsia-400" /> Honors & Awards
                </h4>
                {portfolioData.awards?.map((award, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/3 border border-white/10 hover:border-fuchsia-500/20 transition-all duration-300 relative overflow-hidden group">
                    <p className="font-sans text-xs font-bold text-white group-hover:text-fuchsia-300 transition-colors">{award.name}</p>
                    <p className="font-mono text-[9px] text-gray-500 mt-1 uppercase tracking-wider">{award.contest}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Bento Grid Stats with Interactive Light Effects */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Summary Visualizer Box */}
            <div className="relative p-6 rounded-3xl bg-white/3 border border-white/10 overflow-hidden group backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
              
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-purple-500 animate-ping" />
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">Identity Record</span>
              </div>
              <h4 className="font-sans text-lg font-bold text-white mt-2">Harsh Sandeep Hindalekar</h4>
              <p className="font-sans text-xs text-gray-400 mt-1">Mumbai-based engineer building responsive single-page applications optimized for fast loading and elite visual interactions.</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {["Mumbai, MH", "React Developer", "UI Design", "Clean Architectures"].map((tag) => (
                  <span key={tag} className="font-mono text-[9px] text-purple-300 bg-purple-500/20 border border-purple-500/10 px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Grid of Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {personal.stats.map((stat, idx) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    y: -5, 
                    borderColor: "rgba(168, 85, 247, 0.3)",
                    boxShadow: "0 10px 30px -10px rgba(168, 85, 247, 0.1)"
                  }}
                  className="glass-card p-5 flex flex-col justify-between text-left transition-all duration-300 relative overflow-hidden group"
                  id={`stat-card-${stat.id}`}
                >
                  {/* Subtle inner gradient shift */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all">
                      {statIcons[stat.id] || <CheckCircle className="h-5 w-5 text-purple-400" />}
                    </div>
                    <span className="font-mono text-[9px] text-gray-500">0{idx + 1}</span>
                  </div>

                  <div className="mt-4">
                    <span className="font-sans text-3xl font-black text-white tracking-tight group-hover:text-purple-300 transition-colors">
                      {stat.value}
                    </span>
                    <h5 className="font-sans text-xs font-bold text-gray-200 mt-1">
                      {stat.label}
                    </h5>
                    <p className="font-sans text-[10px] text-gray-500 mt-0.5 line-clamp-2 leading-snug">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
