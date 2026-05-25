import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const sections = ["Home", "About", "Skills", "Projects", "Experience", "Testimonials", "Contact"];
  const [activeSection, setActiveSection] = useState("home");
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  // Hook into Framer Motion's scroll values for a real-time top progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track standard page scrolling to spy active section highlights
  useEffect(() => {
    const handleActiveSpy = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section.toLowerCase());
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.toLowerCase());
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleActiveSpy);
    setTimeout(handleActiveSpy, 150); // Initial delay to sync
    return () => window.removeEventListener("scroll", handleActiveSpy);
  }, [sections]);

  // Track target cursor tracking for the premium custom mouse pointer (Desktop Only)
  useEffect(() => {
    const handleMousePosition = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleInteractiveDetection = (e) => {
      // If cursor is over any clickable element, increase pointer diameter
      const target = e.target;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("clickable"))
      ) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }
    };

    window.addEventListener("mousemove", handleMousePosition);
    window.addEventListener("mouseover", handleInteractiveDetection);

    return () => {
      window.removeEventListener("mousemove", handleMousePosition);
      window.removeEventListener("mouseover", handleInteractiveDetection);
    };
  }, []);

  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth travel adjustment
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 selection:text-white">
      
      {/* 🌌 EXTRA PREMIUM: Atmosphere backdrop */}
      <div className="atmosphere fixed inset-0 opacity-100 z-0 pointer-events-none" />

      {/* 🚀 EXTRA PREMIUM: Scroll Progress Indicator Bar */}
      <motion.div 
        id="scroll-progress-indicator"
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 origin-left z-[110]"
        style={{ scaleX }}
      />

      {/* 🌟 EXTRA PREMIUM: Custom Orb Follow Cursor (Desktop Hidden on Touch viewports) */}
      <motion.div
        id="custom-particle-cursor"
        className="hidden md:block fixed pointer-events-none z-[120] rounded-full mix-blend-screen -translate-x-1/2 -translate-y-1/2"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          width: isHoveringClickable ? 52 : 12,
          height: isHoveringClickable ? 52 : 12,
          backgroundColor: isHoveringClickable ? "rgba(168, 85, 247, 0.15)" : "rgba(59, 130, 246, 0.75)",
          border: isHoveringClickable ? "1.5px solid rgba(168, 85, 247, 0.45)" : "none",
        }}
        animate={{
          scale: isHoveringClickable ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.1 }}
      />

      {/* Primary Top Navbar */}
      <Navbar 
        sections={sections} 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />

      {/* Sections Framework Pages */}
      <main className="relative z-10">
        <Hero onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      {/* Primary Footer Section */}
      <Footer 
        sections={sections} 
        onNavigate={handleNavigate} 
      />

    </div>
  );
}
