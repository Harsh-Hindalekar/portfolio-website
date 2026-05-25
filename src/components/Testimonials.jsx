import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Testimonials() {
  const testimonials = portfolioData.testimonials;
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIdx];

  return (
    <section 
      id="testimonials" 
      className="relative py-24 px-4 md:px-8 bg-transparent overflow-hidden"
    >
      {/* Background glowing rings */}
      <div className="absolute top-1/4 right-0 h-[320px] w-[320px] bg-purple-900/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 h-[320px] w-[320px] bg-blue-900/5 rounded-full blur-[100px] animate-pulse" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-purple-400 uppercase bg-white/3 px-3.5 py-1.5 rounded-full border border-white/10">
            Endorsements
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-4">
            Colleague & Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">Verdicts</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-4" />
        </div>

        {/* Testimonials Slider Frame */}
        <div className="glass-card relative mt-12 p-8 md:p-12 shadow-2xl">
          
          {/* Subtle top light bar */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

          {/* Quote Icon Background element */}
          <div className="absolute top-6 right-8 text-white/5 pointer-events-none select-none">
            <Quote className="h-24 w-24 stroke-[1]" />
          </div>

          <div className="min-h-[220px] flex flex-col justify-between text-left">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 15, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -15, scale: 0.98 }}
                transition={{ duration: 0.45 }}
                className="flex flex-col items-start"
              >
                {/* Visual Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-6" id={`stars-rating-${activeTestimonial.id}`}>
                  {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>

                {/* Main Quote Statement */}
                <p className="font-sans text-base sm:text-lg text-gray-200 leading-relaxed italic font-light">
                  "{activeTestimonial.quote}"
                </p>

                {/* Divider */}
                <div className="h-[1px] w-12 bg-purple-500/30 my-6" />

                {/* Author Metadata Frame */}
                <div className="flex items-center gap-4">
                  <img
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.name}
                    referrerPolicy="no-referrer"
                    className="h-12 w-12 rounded-full border border-purple-500/25 object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-sans text-sm font-bold text-white">{activeTestimonial.name}</span>
                    <span className="font-mono text-[10px] text-gray-400 uppercase mt-0.5 tracking-wider">
                      {activeTestimonial.role} • <span className="text-purple-400 font-semibold">{activeTestimonial.company}</span>
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Navigation Controls Row */}
          <div className="flex items-center justify-between mt-8 border-t border-white/5 pt-6 relative z-10">
            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                    i === activeIdx ? "w-6 bg-purple-500" : "w-1.5 bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Direction Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-white/3 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/10 text-gray-400 hover:text-white transition-all focus:outline-none cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-white/3 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/10 text-gray-400 hover:text-white transition-all focus:outline-none cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
