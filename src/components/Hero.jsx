import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight, Download, FileText, Compass, Sparkles, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Hero({ onNavigate }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = portfolioData.personal.roles;

  // Track cursor position relative to window for subtle ambient hover effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normal offset [-0.5, 0.5]
      const nx = (e.clientX / window.innerWidth) - 0.5;
      const ny = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(nx);
      mouseY.set(ny);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Deriving transforms for float layers
  const floatX1 = useTransform(mouseX, [-0.5, 0.5], [-25, 25]);
  const floatY1 = useTransform(mouseY, [-0.5, 0.5], [-25, 25]);
  const floatX2 = useTransform(mouseX, [-0.5, 0.5], [15, -15]);
  const floatY2 = useTransform(mouseY, [-0.5, 0.5], [15, -15]);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(roleTimer);
  }, [roles.length]);

  const handleDownloadResume = () => {
    // Elegant client feedback - download action placeholder
    alert("Downloading Harsh Hindalekar's Resume: Harboring React and modern engineering frameworks.");
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-transparent py-20 px-4 md:px-8 overflow-hidden"
    >
      {/* Background Glowing Blobs */}
      <div className="absolute top-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-purple-700/5 blur-[130px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-blue-700/5 blur-[120px]" />
      
      {/* Mesh Grid Backdrop Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#161624_1px,transparent_1px),linear-gradient(to_bottom,#161624_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Desktop text content & titles */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-6 lg:mt-0">
          
          {/* Greeting Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 bg-white/3 border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-6 shadow-md shadow-purple-500/5 hover:border-purple-500/40 transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5 text-purple-400 animate-spin" />
            <span className="font-mono text-xs text-purple-300 tracking-wider font-medium uppercase">
              Available for fulltime frontend roles
            </span>
          </motion.div>

          {/* Large Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]"
          >
            Hi, I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-indigo-400">
              Harsh Hindalekar
            </span>
          </motion.h1>

          {/* Sliding Role Animation */}
          <div className="h-12 md:h-16 mt-3 mb-6 overflow-hidden flex items-center justify-center lg:justify-start">
            <span className="font-mono text-sm sm:text-base md:text-lg text-gray-400 mr-2 uppercase tracking-widest font-semibold">
              Specialized in
            </span>
            <div className="relative">
              {roles.map((role, idx) => (
                <motion.div
                  key={role}
                  className={`absolute left-0 top-0 font-sans text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text whitespace-nowrap`}
                  style={{ y: idx === roleIndex ? 0 : 50, opacity: idx === roleIndex ? 1 : 0 }}
                  animate={{ 
                    y: idx === roleIndex ? 0 : idx < roleIndex ? -40 : 40,
                    opacity: idx === roleIndex ? 1 : 0 
                  }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                >
                  {role}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-gray-400 max-w-lg mb-8 leading-relaxed font-light"
          >
            {portfolioData.personal.bio}
          </motion.p>

          {/* Location details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-1.5 text-xs text-gray-500 font-mono mb-8"
          >
            <MapPin className="h-3.5 w-3.5 text-purple-500" />
            <span>{portfolioData.personal.location} / India</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => onNavigate("projects")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-semibold text-sm tracking-wide shadow-lg shadow-purple-500/10 hover:shadow-purple-500/25 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowRight className="h-4 w-4 text-purple-200 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={handleDownloadResume}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 text-white font-semibold text-sm tracking-wide hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4 text-purple-400" />
              Download Resume/CV
            </button>
          </motion.div>

          {/* Social Icons Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center gap-4"
          >
            <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase">Connect Ledger:</span>
            <div className="flex items-center gap-3">
              {[
                { icon: <Github className="h-4 w-4" />, link: portfolioData.personal.socials.github, label: "GitHub" },
                { icon: <Linkedin className="h-4 w-4" />, link: portfolioData.personal.socials.linkedin, label: "LinkedIn" },
                { icon: <Mail className="h-4 w-4" />, link: `mailto:${portfolioData.personal.socials.email}`, label: "Email" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/3 border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 shadow-sm"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Side: Graphic profile element / Orbit circuit - responsive */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 mt-8 lg:mt-0 relative">
          
          {/* Animated Background Vector Rings (Static relative and scaled) */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border border-purple-500/5 animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-blue-500/10 animate-[spin_40s_linear_infinite_reverse]" />
          </div>

          {/* Floating UI cards driven by Mouse values */}
          <motion.div
            style={{ x: floatX1, y: floatY1 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px]"
          >
            {/* Core Circular Avatar Display */}
            <div className="absolute inset-0 rounded-[42px] bg-gradient-to-tr from-purple-600/15 via-indigo-600/5 to-cyan-500/15 p-[1px] shadow-2xl backdrop-blur-md overflow-hidden flex items-center justify-center border border-white/10">
              
              {/* Inner Circle Layer */}
              <div className="relative w-[92%] h-[92%] rounded-[36px] bg-[#050505]/80 backdrop-blur-2xl flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                
                {/* Visual Binary Stream elements */}
                <div className="absolute inset-0 font-mono text-[9px] text-purple-500/10 select-none overflow-hidden text-left p-4 leading-normal break-words opacity-50">
                  {`const developer = { name: "Harsh Sandeep", location: "Mumbai", skills: ["React", "Tailwind", "Framer-Motion"], coding: true }; function renderPortfolio() { return developer.skills.map(s => React.createElement(s)); }`}
                </div>

                {/* Main Glowing Mascot Circle */}
                <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center border-4 border-[#050505] shadow-xl shadow-purple-500/20">
                  <span className="font-sans text-5xl sm:text-6xl font-black text-white select-none">
                    HS
                  </span>
                  {/* Internal rotating light */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-[spin_2.5s_linear_infinite]" />
                </div>

                {/* Sub title details inside orbiting container */}
                <div className="relative z-10 mt-6 flex flex-col items-center">
                  <span className="font-sans text-base font-extrabold text-white">Harsh Sandeep H.</span>
                  <span className="font-mono text-[10px] uppercase text-purple-400 font-semibold mt-1 tracking-wider">React UI Specialist</span>
                  <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-3 md:mt-4" />
                </div>

                <div className="relative z-10 mt-3 md:mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest font-semibold">Online Portfolio active</span>
                </div>
              </div>
            </div>

            {/* Float Card 1: Experience statistic card (Floating top-left) */}
            <motion.div
              style={{ x: floatX2, y: floatY2 }}
              className="absolute -top-4 -left-6 md:-left-8 bg-white/3 border border-white/10 rounded-2xl p-4 shadow-lg backdrop-blur-xl flex items-center gap-3.5 max-w-[170px]"
            >
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Compass className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans text-lg font-bold text-white line-clamp-1 leading-none">React</span>
                <span className="font-mono text-[9px] text-gray-400 uppercase mt-0.5">Vite Builder</span>
              </div>
            </motion.div>

            {/* Float Card 2: Interactive technology bubble (Floating bottom-right) */}
            <motion.div
              style={{ x: floatX2, y: floatY2 }}
              className="absolute -bottom-4 -right-6 md:-right-8 bg-white/3 border border-white/10 rounded-2xl p-4 shadow-lg backdrop-blur-xl flex items-center gap-3.5 max-w-[170px]"
            >
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans text-lg font-bold text-white line-clamp-1 leading-none">Tailwind</span>
                <span className="font-mono text-[9px] text-gray-400 uppercase mt-0.5">Engine v4</span>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
