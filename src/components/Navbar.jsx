import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar({ activeSection, onSectionClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certificates", label: "Certificates & Awards" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    onSectionClick(id);
  };

  return (
    <header
      id="portfolio-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand / Human Designed monogram */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <div className="h-8 w-8 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center font-mono font-bold text-sm text-white dark:text-slate-900 shadow-sm transition-all hover:scale-105">
              <div className="w-2.5 h-2.5 bg-white dark:bg-slate-900 rounded-full"></div>
            </div>
            <span className="font-sans font-extrabold tracking-tight text-lg text-slate-900 dark:text-white transition-opacity hover:opacity-90">
              Harsh.
            </span>
          </motion.div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-2 text-[11px] lg:text-xs font-semibold tracking-wider transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  activeSection === item.id
                    ? "text-slate-900 dark:text-white font-bold"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Right Custom Let's Talk CTA button matching Design HTML */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("contact")}
              className="px-5 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-xs cursor-pointer tracking-wider uppercase font-mono"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Screen overlay with slide Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-link-mobile-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeSection === item.id
                      ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400 font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 flex items-center justify-start gap-4 px-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="https://github.com/harshhindalekar051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/harshhindalekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:harshhindalekar051@gmail.com"
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="tel:7715871236"
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
