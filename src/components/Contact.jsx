import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Linkedin, Github, Send, Sparkles, CheckCircle, ShieldAlert } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Domain request name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Communication return address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid return address protocol.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message specification details required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please specify a robust description (min 10 chars).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error immediately when user types
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate premium server-side pipeline resolution
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1800);
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen py-24 px-4 md:px-8 bg-transparent overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-900/5 blur-[130px]" />
      <div className="absolute bottom-1/4 right-0 h-[350px] w-[350px] rounded-full bg-purple-900/5 blur-[120px] animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-blue-400 uppercase bg-white/3 px-3.5 py-1.5 rounded-full border border-white/10">
            Secure Hotlines
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-4">
            Initiate Contact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Collaborate</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Content Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          
          {/* Left Side: Contact details */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div>
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight">
                Let's Build Something Monumental
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-light mt-3">
                Whether you want to recruit Harsh for a frontend role, commission a premium React application, or discuss high-performance UI architecture—reach out directly. No communication remains unread.
              </p>
            </div>

            {/* Information channels */}
            <div className="flex flex-col gap-4">
              
              {/* Mail */}
              <div className="p-4 rounded-2xl bg-white/3 border border-white/10 flex items-center gap-4 hover:border-purple-500/20 transition-all duration-300">
                <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider">Mail Terminal</span>
                  <a href={`mailto:${personal.socials.email}`} className="font-sans text-xs sm:text-sm font-semibold text-white hover:text-purple-300 transition-colors">
                    {personal.socials.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-white/3 border border-white/10 flex items-center gap-4 hover:border-blue-500/20 transition-all duration-300">
                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider">Operational Base</span>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-white">
                    {personal.location}, India
                  </span>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="p-4 rounded-2xl bg-white/3 border border-white/10 flex items-center gap-4 hover:border-indigo-500/20 transition-all duration-300">
                <div className="p-3.5 rounded-xl bg-[#6366f1]/10 border border-indigo-500/25 text-indigo-400">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider">LinkedIn Account</span>
                  <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="font-sans text-xs sm:text-sm font-semibold text-white hover:text-indigo-300 transition-colors">
                    linkedin.com/in/harshhindalekar
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="p-4 rounded-2xl bg-white/3 border border-white/10 flex items-center gap-4 hover:border-gray-500/20 transition-all duration-300">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                  <Github className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider">Source Registry</span>
                  <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="font-sans text-xs sm:text-sm font-semibold text-white hover:text-purple-300 transition-colors">
                    github.com/harshhindalekar
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Message routing form */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card p-6 md:p-8 relative overflow-hidden shadow-2xl">
              
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />

              <form onSubmit={handleSubmit} className="flex flex-col gap-6" id="contact-message-form">
                
                {/* Name */}
                <div className="flex flex-col text-left">
                  <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-2">
                    Request Author Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Jane Doe"
                      className={`w-full bg-[#050505]/40 border ${
                        errors.name ? "border-red-500/40 focus:border-red-500" : "border-white/10 focus:border-purple-500"
                      } rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 backdrop-blur-sm`}
                    />
                  </div>
                  {errors.name && (
                    <span className="text-[10px] text-red-400 font-mono mt-1.5 flex items-center gap-1">
                      <ShieldAlert className="h-3.5 w-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col text-left">
                  <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-2">
                    Return Communication Address (Email)
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., jane@company.com"
                      className={`w-full bg-[#050505]/40 border ${
                        errors.email ? "border-red-500/40 focus:border-red-500" : "border-white/10 focus:border-purple-500"
                      } rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 backdrop-blur-sm`}
                    />
                  </div>
                  {errors.email && (
                    <span className="text-[10px] text-red-400 font-mono mt-1.5 flex items-center gap-1">
                      <ShieldAlert className="h-3.5 w-3.5" />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Message text area */}
                <div className="flex flex-col text-left">
                  <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-2">
                    Scope Specification / Message Details
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Specify your project parameters or opportunity specifications..."
                      className={`w-full bg-[#050505]/40 border ${
                        errors.message ? "border-red-500/40 focus:border-red-500" : "border-white/10 focus:border-purple-500"
                      } rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 resize-none h-[140px] backdrop-blur-sm`}
                    />
                  </div>
                  {errors.message && (
                    <span className="text-[10px] text-red-400 font-mono mt-1.5 flex items-center gap-1">
                      <ShieldAlert className="h-3.5 w-3.5" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit action panel */}
                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-650 to-blue-600 text-white font-bold text-xs uppercase tracking-widest hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4.5 w-4.5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        <span>Transmitting packet...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" />
                        <span>Transmit Message Packet</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

              {/* Inline Success Notice overlay */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#050505]/98 backdrop-blur-2xl p-8 flex flex-col items-center justify-center text-center z-10"
                  >
                    <div className="p-4 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6 flex items-center justify-center">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] font-semibold">Transmission successful</span>
                    <h3 className="font-sans text-xl font-bold text-white mt-3">Message Received Perfectly</h3>
                    <p className="font-sans text-xs text-gray-400 mt-2 max-w-sm">
                      Thank you for contacting Harsh. The communication protocol has resolved and an engineer will reply shortly.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-6 font-mono text-[10px] text-indigo-400 hover:text-indigo-300 uppercase tracking-widest font-semibold underline underline-offset-4 focus:outline-none cursor-pointer"
                    >
                      Dismiss Notification
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
