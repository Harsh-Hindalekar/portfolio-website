import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Footer({ sections, onNavigate }) {
  const { personal } = portfolioData;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      id="footer-section" 
      className="bg-[#050505]/60 backdrop-blur-3xl border-t border-white/10 py-16 px-4 md:px-8 relative overflow-hidden animate-fade-in"
    >
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12">
        
        {/* Main Footer layout rows */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/10 pb-12">
          
          {/* Brand Col Left */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-2 group text-left focus:outline-none cursor-pointer"
            >
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 p-[1px] shadow">
                <span className="font-sans text-base font-extrabold text-white">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-sm font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                  Harsh Hindalekar
                </span>
                <span className="font-mono text-[9px] tracking-wider text-gray-500 uppercase">
                  Mumbai, India
                </span>
              </div>
            </button>
            <p className="font-sans text-xs text-gray-500 mt-4 max-w-sm leading-relaxed font-light">
              Crafting premium user interfaces using React.js and modern styling structures. Committed to usability and clean engineering metrics.
            </p>
          </div>

          {/* Quick mapping references Center */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Location Map</span>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => onNavigate(section.toLowerCase())}
                  className="font-sans text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>

          {/* Social connections Col Right */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-4">
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Connect Node</span>
            <div className="flex items-center gap-3">
              {[
                { icon: <Github className="h-4 w-4" />, link: personal.socials.github, label: "GitHub" },
                { icon: <Linkedin className="h-4 w-4" />, link: personal.socials.linkedin, label: "LinkedIn" },
                { icon: <Mail className="h-4 w-4" />, link: `mailto:${personal.socials.email}`, label: "Email" }
              ].map((item, id) => (
                <a
                  key={id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/3 border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/20 transition-all duration-300"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright and Back to Top panel */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-sans text-[10px] sm:text-xs text-gray-600 font-light text-center sm:text-left">
            &copy; {new Date().getFullYear()} Harsh Sandeep Hindalekar. All rights reserved. Made under standard React portfolio spec.
          </p>

          <button
            onClick={handleScrollToTop}
            className="p-3 rounded-full bg-white/3 hover:bg-purple-500/10 border border-white/10 hover:border-purple-500/30 text-gray-400 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1.5 focus:outline-none cursor-pointer"
            aria-label="Scroll to top"
            id="scroll-to-top-btn"
          >
            <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
