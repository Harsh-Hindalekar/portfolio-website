import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar({ sections, activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <motion.nav
        id="main-navbar"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
          isScrolled 
            ? "bg-white/3 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/30" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo on Left */}
          <button
            onClick={() => handleLinkClick("home")}
            className="flex items-center gap-2 group text-left focus:outline-none"
            id="navbar-logo"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 p-[1px] shadow-md shadow-purple-500/10">
              <span className="font-sans text-base font-extrabold text-white">H</span>
              <div className="absolute inset-0 rounded-xl bg-purple-500 opacity-0 blur-sm group-hover:opacity-40 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors duration-300">
                Harsh Sandeep
              </span>
              <span className="font-mono text-[9px] tracking-wider text-gray-400 uppercase">
                Frontend Developer
              </span>
            </div>
          </button>

          {/* Navigation Links on Right - Desktop */}
          <div className="hidden md:flex items-center gap-1 bg-white/3 px-2 py-1.5 rounded-full border border-white/10 shadow-inner backdrop-blur-xl">
            {sections.map((section) => {
              const isActive = activeSection === section.toLowerCase();
              return (
                <button
                  key={section}
                  onClick={() => handleLinkClick(section.toLowerCase())}
                  className={`relative px-4 py-2 text-xs font-medium tracking-wide uppercase transition-colors duration-300 rounded-full focus:outline-none ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                  id={`nav-link-${section.toLowerCase()}`}
                >
                  {section}
                  {isActive && (
                    <motion.div
                      layoutId="active-navbar-pill"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-indigo-500/15 border border-purple-500/25 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Extra Premium CTA Button - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => handleLinkClick("contact")}
              className="relative overflow-hidden group px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-xs font-semibold text-white tracking-wide shadow-md shadow-purple-500/10 hover:shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-1.5"
              id="navbar-cta"
            >
              Contact Me
              <ArrowUpRight className="h-3.5 w-3.5 text-purple-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white focus:outline-none"
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>
      </motion.nav>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl md:hidden pt-28 px-6 flex flex-col justify-between pb-8"
          >
            {/* Background glowing elements */}
            <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-purple-600/10 blur-[80px] -z-10" />

            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] tracking-[0.3em] text-purple-400 uppercase border-b border-purple-500/10 pb-2">
                Navigation
              </span>
              <div className="flex flex-col gap-2">
                {sections.map((section, idx) => {
                  const isActive = activeSection === section.toLowerCase();
                  return (
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={section}
                      onClick={() => handleLinkClick(section.toLowerCase())}
                      className={`text-left py-3 text-2xl font-bold tracking-tight border-b border-white/5 flex items-center justify-between ${
                        isActive ? "text-purple-400" : "text-gray-300"
                      }`}
                      id={`mobile-nav-link-${section.toLowerCase()}`}
                    >
                      <span>{section}</span>
                      <span className="font-mono text-xs text-gray-500">0{idx + 1}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Footer details in panel */}
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleLinkClick("contact")}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 font-bold text-center text-white"
              >
                Hire harsh Hindalekar
              </button>
              <div className="text-center">
                <span className="font-sans text-xs text-gray-500">
                  Mumbai, India • harshhindalekar051@gmail.com
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
