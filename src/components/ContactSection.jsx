import React, { useState } from "react";
import { personalInfo } from "../data";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquareCode } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Mimic real delivery with quick timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset sent flag after a delay
      setTimeout(() => setIsSent(false), 4000);
    }, 1200);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC] dark:bg-slate-950 border-t border-slate-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-4 mb-20 text-center">
          <div className="inline-flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-bold tracking-widest uppercase font-mono">
            <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
            Section 07 / Contact & Connect
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
            Initiate a <span className="font-normal italic text-slate-400 font-serif">Connection</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-500 dark:text-slate-400 font-sans">
            Ready to collaborate or discuss team opportunities? Fill out the secure form below or reach out via phone or email directly.
          </p>
        </div>

        {/* Responsive Grid Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Coordinates (4 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-white uppercase tracking-tight">
                Direct Coordinates
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans max-w-sm">
                Available for immediate employment opportunities, contracting terms, or general full-stack engineering collaborations. Based in Mumbai, India.
              </p>

              {/* Coordinates List in card styles */}
              <div className="space-y-4 pt-2">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl hover:border-slate-205 dark:hover:border-slate-705 hover:shadow-xs transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-full bg-slate-50 border border-slate-100 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-350 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Send Email</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">{personalInfo.email}</div>
                  </div>
                </a>

                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl hover:border-slate-205 dark:hover:border-slate-705 hover:shadow-xs transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-full bg-slate-50 border border-slate-100 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-350 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Make Voice Call</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">+91 {personalInfo.phone}</div>
                  </div>
                </a>

                <div 
                  className="flex items-center gap-4 p-4 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl"
                >
                  <div className="p-2.5 rounded-full bg-slate-50 border border-slate-100 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-350">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Location Base</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">{personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid block */}
            <div className="border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 rounded-3xl shadow-sm">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3 font-semibold">Permanent Networks</div>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:hover:border-slate-705 dark:hover:bg-slate-900 font-sans text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:hover:border-slate-705 dark:hover:bg-slate-900 font-sans text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inline Messaging Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-940 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm h-full flex flex-col justify-between">
              
              <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[9px] text-zinc-300 dark:text-slate-750 font-bold">
                <MessageSquareCode className="w-3 h-3" />
                <span>HH_ROUTING_NODE_CONTACT</span>
              </div>

              <div>
                <h3 className="font-sans font-extrabold text-lg text-slate-900 dark:text-white uppercase tracking-tight mb-6">
                  Transmit Msg
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name-input" className="block font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Full Name
                      </label>
                      <input
                        id="name-input"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-100 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-950/30 text-xs font-sans text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-hidden focus:border-slate-900 dark:focus:border-white focus:bg-white dark:focus:bg-slate-900 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email-input" className="block font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Email Address
                      </label>
                      <input
                        id="email-input"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-100 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-950/30 text-xs font-sans text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-hidden focus:border-slate-900 dark:focus:border-white focus:bg-white dark:focus:bg-slate-900 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="msg-input" className="block font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Message Content
                    </label>
                    <textarea
                      id="msg-input"
                      name="message"
                      rows={5}
                      required
                      placeholder="Type your message details here..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-100 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-950/30 text-xs font-sans text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-hidden focus:border-slate-900 dark:focus:border-white focus:bg-white dark:focus:bg-slate-900 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      id="btn-submit-contact"
                      type="submit"
                      disabled={isSubmitting || isSent}
                      className={`w-full group flex items-center justify-center gap-2 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm ${
                        isSent 
                          ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border border-transparent cursor-default" 
                          : "bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 disabled:opacity-50"
                      }`}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.span
                            key="submitting"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Transmitting...
                          </motion.span>
                        ) : isSent ? (
                          <motion.span
                            key="sent"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="inline-flex items-center gap-1.5 font-bold"
                          >
                            Sent Successfully ✓
                          </motion.span>
                        ) : (
                          <motion.span
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            Transmit Message
                            <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </form>
              </div>

              {/* Design baseline */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 text-center sm:text-left flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] text-slate-450 uppercase tracking-widest pl-1">
                <span>HANDY SECURE TUNNEL</span>
                <span>STATE: READY</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
