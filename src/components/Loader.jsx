import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  const loaderRoles = [
    "COMPILING PROTOCOLS...",
    "INITIALIZING REACT ENGINE...",
    "PARSING INTENT & SPACIAL GRID...",
    "RENDERING HARSH'S PORTFOLIO..."
  ];

  useEffect(() => {
    // Increment progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }
        // Accelerate near the end
        const step = prev < 50 ? Math.random() * 8 + 5 : Math.random() * 12 + 8;
        return Math.min(Math.round(prev + step), 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % loaderRoles.length);
    }, 600);
    return () => clearInterval(roleInterval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        id="page-loader"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 1.05,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
        }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050508] text-white"
      >
        {/* Abstract Background Blur Nodes */}
        <div className="absolute top-1/4 left-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-900/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" />

        {/* Core Glowing Frame */}
        <div className="relative flex flex-col items-center p-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-[#0d0d15]/50 border border-purple-500/20 shadow-lg shadow-purple-500/5 backdrop-blur-xl"
          >
            {/* Pulsing Outer Gradient Ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500 to-blue-500 opacity-20 blur-md animate-pulse" />
            
            {/* Spinning Indicator Line */}
            <svg className="absolute inset-0 h-full w-full rotate-[-90deg]">
              <circle
                cx="48"
                cy="48"
                r="42"
                stroke="rgba(168, 85, 247, 0.08)"
                strokeWidth="4"
                fill="transparent"
              />
              <motion.circle
                cx="48"
                cy="48"
                r="42"
                stroke="url(#gradientLoader)"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray="264"
                strokeDashoffset={264 - (264 * progress) / 100}
                strokeLinecap="round"
                className="transition-all duration-150 ease-out"
              />
              <defs>
                <linearGradient id="gradientLoader" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Inner Brand Signet */}
            <span className="font-sans text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              H
            </span>
          </motion.div>

          {/* Progress Counters & Active Logs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col items-center"
          >
            <div className="font-sans text-3xl font-extrabold tracking-tight text-white md:text-4xl min-w-[3.5rem]">
              {progress}%
            </div>
            
            {/* Dynamic Status Log */}
            <div className="mt-2 h-6 flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="font-mono text-[10px] tracking-[0.2em] text-gray-400 uppercase"
                >
                  {loaderRoles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Thin Aesthetic Track */}
            <div className="mt-6 h-[2px] w-48 overflow-hidden rounded-full bg-gray-905/30 border-b border-white/5 relative">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
