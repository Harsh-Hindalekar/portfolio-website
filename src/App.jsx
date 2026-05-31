import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import CertificatesSection from "./components/CertificatesSection";
import ContactSection from "./components/ContactSection";
import { Sun, Moon, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync with URL hash for robust page-division routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const validPages = ["home", "about", "skills", "projects", "experience", "certificates", "contact"];
      if (validPages.includes(hash)) {
        setActiveSection(hash);
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (!window.location.hash) {
        // Default to home on root access
        setActiveSection("home");
        window.location.hash = "home";
      }
    };

    handleHashChange();

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Syncing with Tailwind Dark theme configuration
  useEffect(() => {
    const preferredTheme = localStorage.getItem("portfolio-theme");
    if (preferredTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newVal = !prev;
      if (newVal) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("portfolio-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("portfolio-theme", "light");
      }
      return newVal;
    });
  };

  const handleSectionClick = (sectionId) => {
    window.location.hash = sectionId;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans antialiased selection:bg-slate-900/10 dark:selection:bg-white/20">
      
      {/* Dynamic Grid Background Accent Lines */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.03] bg-linear-to-b from-indigo-500/10 via-transparent to-transparent bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] z-0" />
      
      {/* Navbar Container */}
      <Navbar activeSection={activeSection} onSectionClick={handleSectionClick} />

      {/* Main Structural Body */}
      <main className="relative z-10 min-h-[calc(100vh-170px)] pt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeSection === "home" && <HeroSection onExploreClick={handleSectionClick} />}
            {activeSection === "about" && <AboutSection />}
            {activeSection === "skills" && <SkillsSection />}
            {activeSection === "projects" && <ProjectsSection />}
            {activeSection === "experience" && <ExperienceSection />}
            {activeSection === "certificates" && <CertificatesSection />}
            {activeSection === "contact" && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Human Engineered Portfolio Footer */}
      <footer className="relative bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-10 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-3">
              <div className="flex items-center text-slate-900 dark:text-white font-sans font-extrabold text-lg tracking-tight">
                Harsh<span className="text-slate-400">.</span>
              </div>
              <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800 hidden sm:block" />
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  EST. 2026 • CREATIVE STUDIO
                </p>
              </div>
            </div>

            {/* Look AI Free Affirmation */}
            <div className="text-center md:text-right font-mono text-[9px] text-slate-400 uppercase tracking-widest space-y-1">
              <p className="text-slate-700 dark:text-slate-350 font-bold">✓ 100% PROUDLY HUMAN-ENGINEERED LAYOUT</p>
              <p>NO GENERIC GRAPHICS • ZERO ARTIFIED SLOP</p>
            </div>
            
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Settings Corner / Theme & Scroll utilities */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
        
        {/* Theme Switch Button */}
        <motion.button
          id="btn-theme-toggle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-3 rounded-full bg-white dark:bg-slate-900 text-slate-705 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-md flex items-center justify-center cursor-pointer select-none"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-slate-705" />}
        </motion.button>

        {/* Scroll Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              id="btn-scroll-top"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-3 rounded-full bg-slate-900 border border-transparent hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 shadow-md flex items-center justify-center cursor-pointer select-none"
              title="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
