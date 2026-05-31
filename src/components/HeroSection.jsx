import React from "react";
import { motion } from "motion/react";
import { personalInfo } from "../data";
import { CornerDownRight, Mail, Phone, MapPin, ArrowRight, Github, Linkedin } from "lucide-react";

export default function HeroSection({ onExploreClick }) {
  // SVG drawing of a professional software designer silhouette or monogram representation to sit elegantly in the morphing blob.
  const renderProfileShorthand = () => (
    <div className="w-full h-full relative select-none">
      {/* Profile Image with modern hover scale trigger */}
      <img 
        src="/profile.jpg" 
        alt="Harsh Hindalekar" 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      
      {/* Custom handcoded code accents overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[9px] text-white bg-slate-950/65 backdrop-blur-xs px-2.5 py-1 rounded-md select-none z-20">
        <span>LOC: MUMBAI, IN</span>
        <span>MOD: REACT.JSX</span>
      </div>
    </div>
  );

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 flex items-center justify-center overflow-hidden bg-[#F8FAFC] dark:bg-slate-950">
      {/* Background elegant lighting accents */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-slate-350/10 dark:bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-slate-450/10 dark:bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Style tag strictly matching Clean Minimalism design HTML */}
        <div className="flex justify-start mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-bold tracking-widest uppercase font-mono"
          >
            <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
            Available for projects
          </motion.div>
        </div>

        {/* Major Grid System: Left Body & Right Organic Blob Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Body) - Slid-Up Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CornerDownRight className="w-4 h-4 text-slate-405 dark:text-slate-400" />
                <span className="font-mono text-[11px] font-bold tracking-widest text-slate-450 dark:text-slate-400 uppercase">
                  Junior Web Developer
                </span>
              </div>
              
              <h1 className="font-sans text-slate-900 dark:text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
                Harsh <span className="text-slate-400 italic font-normal font-serif">Hindalekar</span>
              </h1>
              <p className="text-sm font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase font-mono">
                Crafting digital experiences through <span className="italic font-serif text-slate-400 dark:text-slate-500">intentional</span> design.
              </p>
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
              {personalInfo.about}
            </p>

            {/* Quick Summary Grid Card following the theme's white rounded-3xl borders */}
            <div className="border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xs grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-100/50 dark:border-slate-700/50">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Location</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">{personalInfo.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-100/50 dark:border-slate-700/50">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-slate-500 truncate block">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-100/50 dark:border-slate-700/50">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Contact</div>
                  <a href={`tel:${personalInfo.phone}`} className="text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-slate-500">
                    +91 {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-100/50 dark:border-slate-700/50">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Education</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">BSc IT Graduate</div>
                </div>
              </div>
            </div>

            {/* Quick Actions Callout with theme rounded-full badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="btn-projects"
                onClick={() => onExploreClick("projects")}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-sans text-xs font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
              >
                View Portfolio Works
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="btn-contact"
                onClick={() => onExploreClick("contact")}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* Right Column (Profile Blob) - Fade-in with scale Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center py-6 lg:py-0"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Card outline system boundary around organic silhouette */}
              <div className="absolute inset-0 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm bg-white dark:bg-slate-900" />
              
              <div className="absolute top-4 left-4 font-mono text-[9px] text-slate-400 uppercase tracking-widest pl-2 pt-1 pointer-events-none">
                Fig 01. INTENTIONAL VECTOR PROFILE
              </div>
              
              {/* Morphing organic blog wrapper */}
              <div className="absolute inset-6 overflow-hidden organic-blob-shape border-2 border-slate-100 dark:border-slate-800 bg-linear-to-tr from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-850 shadow-xs">
                {renderProfileShorthand()}
              </div>

              {/* Decorative design corner crosses */}
              <div className="absolute -top-1.5 -left-1.5 text-xs text-slate-300 dark:text-slate-700 font-mono select-none pointer-events-none">+</div>
              <div className="absolute -top-1.5 -right-1.5 text-xs text-slate-300 dark:text-slate-700 font-mono select-none pointer-events-none">+</div>
              <div className="absolute -bottom-1.5 -left-1.5 text-xs text-slate-300 dark:text-slate-700 font-mono select-none pointer-events-none">+</div>
              <div className="absolute -bottom-1.5 -right-1.5 text-xs text-slate-300 dark:text-slate-700 font-mono select-none pointer-events-none">+</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
