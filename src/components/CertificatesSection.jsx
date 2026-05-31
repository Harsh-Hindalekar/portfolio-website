import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { certifications, awards } from "../data";
import { 
  Award, 
  ShieldCheck, 
  ExternalLink, 
  Calendar, 
  BookOpen, 
  Sparkles, 
  Trophy, 
  X, 
  CheckCircle,
  FileCheck,
  QrCode
} from "lucide-react";

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  const openCertificate = (cert) => {
    setSelectedCert(cert);
  };

  const closeCertificate = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certificates" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-4 mb-20 text-center">
          <div className="inline-flex items-center gap-2 text-slate-450 dark:text-slate-500 text-xs font-bold tracking-widest uppercase font-mono">
            <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700"></span>
            Section 06 / Badges & Accomplishments
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
            Credentials & <span className="font-normal italic text-slate-400 font-serif">Honors</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-500 dark:text-slate-400 font-sans">
            Verified academic milestones, technical course completions, and performance accolades. Click on any credential to view details.
          </p>
        </div>

        {/* Credentials Symmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* Column 1: Academic Awards & Accolades */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
              <div className="p-2.5 bg-slate-950 text-white dark:bg-white dark:text-slate-950 rounded-full">
                <Trophy className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                Excellence Awards
              </h3>
            </div>

            {awards.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 rounded-3xl shadow-xs hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-md transition-all duration-300"
              >
                {/* Visual indicator corner badge */}
                <div className="absolute top-4 right-4 flex h-6 items-center gap-1.5 px-2 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900 rounded-full font-mono text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>WINNER</span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[9px] font-bold text-slate-400 tracking-widest uppercase block">
                      {award.category || "College Milestone"}
                    </span>
                    <h4 className="font-sans font-extrabold text-lg text-slate-900 dark:text-white leading-tight">
                      {award.title}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                    {award.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {award.skills?.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-0.5 bg-slate-50 border border-slate-100 dark:bg-slate-800 dark:border-slate-700 rounded-full text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-slate-50 dark:border-slate-850 pt-4">
                    <button
                      onClick={() => openCertificate(award)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white hover:text-slate-650 dark:hover:text-slate-300 transition-colors cursor-pointer font-mono"
                    >
                      <FileCheck className="w-4 h-4 text-slate-400" />
                      View Award Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 2: Verifiable Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
              <div className="p-2.5 bg-slate-950 text-white dark:bg-white dark:text-slate-950 rounded-full">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                Professional Courses
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 rounded-3xl shadow-xs hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-md transition-all duration-300"
                >
                  {/* Visual verified badge */}
                  <div className="absolute top-4 right-4 flex h-6 items-center gap-1 px-2.5 bg-slate-900 text-white dark:bg-white dark:text-slate-950 rounded-full font-mono text-[9px] font-bold">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>VERIFIED</span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <span className="font-mono text-[9px] font-bold text-slate-400 tracking-widest uppercase block">
                        {cert.category}
                      </span>
                      <h4 className="font-sans font-extrabold text-lg text-slate-900 dark:text-white leading-tight">
                        {cert.title}
                      </h4>
                      <p className="font-mono text-[10px] text-slate-405 leading-none">
                        Provided by {cert.provider} • {cert.date}
                      </p>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {cert.skills?.map((skill, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-0.5 bg-slate-50 border border-slate-100 dark:bg-slate-800 dark:border-slate-700 rounded-full text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-slate-50 dark:border-slate-850 pt-4 flex items-center justify-between">
                      <button
                        onClick={() => openCertificate(cert)}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white hover:text-slate-650 dark:hover:text-slate-300 transition-colors cursor-pointer font-mono"
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-505" />
                        View Certificate
                      </button>

                      {cert.verificationUrl && (
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-slate-400 hover:text-slate-750 transition-colors cursor-pointer"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Verify Official Link
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* High-Fidelity Animated Modal Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
            
            {/* Modal Body container - Maximize visual beauty & responsiveness of certificate only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl p-4 sm:p-6 flex flex-col gap-6 my-4"
            >
              
              {/* Top Bar with actions */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Verified Credential Node
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {selectedCert.verificationUrl && (
                    <a
                      href={selectedCert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono font-bold uppercase text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Verify Official Link
                    </a>
                  )}
                  <button
                    onClick={closeCertificate}
                    className="p-1.5 bg-slate-900 text-slate-400 border border-slate-800 rounded-full hover:text-white hover:bg-slate-805 transition-all cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Scrollable Certificates wrapper layer with min-width constraint to prevent squishing on mobile */}
              <div className="w-full overflow-x-auto py-2 scrollbar-thin rounded-2xl">
                <div className="min-w-[720px] lg:min-w-0 w-full">
                  
                  {selectedCert.provider === "Great Learning Academy" ? (
                    // Exact High-Fidelity CSS replica of Great Learning Completion Certificate matching user images
                    <div className="relative border-[14px] border-white shadow-2xl rounded-sm">
                      <div className="relative border-[3px] border-dashed border-slate-300 p-6 sm:p-10 md:p-12 bg-white text-slate-900 min-h-[440px] flex flex-col justify-between font-sans text-center transition-all select-none">
                        
                        {/* Top-left custom gradient brace corner matching actual certificate */}
                        <div className="absolute top-1 left-1 w-16 h-16 border-t-[5px] border-l-[5px] pointer-events-none opacity-95" style={{ borderImage: "linear-gradient(to bottom right, #00d2ff, #0012ff) 1" }} />
                        {/* Bottom-right custom gradient brace corner matching actual certificate */}
                        <div className="absolute bottom-1 right-1 w-16 h-16 border-b-[5px] border-r-[5px] pointer-events-none opacity-95" style={{ borderImage: "linear-gradient(to bottom right, #00d2ff, #0012ff) 1" }} />

                        {/* Thin perimeter line guides */}
                        <div className="absolute top-2.5 bottom-2.5 left-2.5 w-[1px] bg-slate-100" />
                        <div className="absolute top-2.5 bottom-2.5 right-2.5 w-[1px] bg-slate-100" />

                        {/* Logo Section */}
                        <div className="flex flex-col items-center gap-1 pb-2">
                          <div className="flex items-center gap-2.5 text-blue-700 font-extrabold text-2xl tracking-tighter">
                            <span className="text-3xl font-black bg-blue-600 text-white h-9 w-9 flex items-center justify-center rounded-lg shadow-sm">G</span>
                            <div className="text-left leading-none">
                              <span className="block font-black text-lg text-blue-900">Great</span>
                              <span className="block text-[9px] uppercase tracking-widest font-black text-blue-550">Learning</span>
                            </div>
                          </div>
                        </div>

                        {/* Dynamic Core Text Panel */}
                        <div className="space-y-4 my-auto py-2">
                          <h4 className="font-sans font-normal text-2xl sm:text-3xl tracking-wider uppercase text-slate-800 leading-tight">
                            CERTIFICATE OF COMPLETION
                          </h4>

                          <div className="space-y-1">
                            <p className="text-[11px] italic text-slate-400 font-serif leading-none">Presented to</p>
                            <p className="font-sans text-xl sm:text-2xl font-black text-blue-600 tracking-tight underline decoration-1 decoration-blue-105 underline-offset-4">
                              Harsh Sandeep Hindalekar
                            </p>
                          </div>

                          <div className="max-w-md mx-auto space-y-1.5 pt-2">
                            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                              For successfully completing a free online course
                            </p>
                            <p className="font-sans font-black text-sm sm:text-base text-slate-900 border-b border-dashed border-slate-200 pb-1">
                              {selectedCert.title}
                            </p>
                          </div>

                          <div className="pt-2">
                            <p className="text-[10px] font-mono text-slate-400">
                              Provided by <span className="font-bold text-slate-700">Great Learning Academy</span>
                            </p>
                            <p className="text-[9px] font-mono text-slate-350 mt-0.5">
                              (On December 2024)
                            </p>
                          </div>
                        </div>

                        {/* Footer Verification Row */}
                        <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-[9px] font-mono text-slate-400 gap-2">
                          <span>GL_ROUTING_NODE_DEC24</span>
                          {selectedCert.verificationUrl ? (
                            <span className="truncate max-w-full">
                              To verify this certificate visit: <a href={selectedCert.verificationUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">{selectedCert.verificationUrl}</a>
                            </span>
                          ) : (
                            <span>Verified Course Attendance</span>
                          )}
                        </div>

                      </div>
                    </div>
                  ) : selectedCert.provider === "Milestone Institute of Technology" ? (
                    // Exact High-Fidelity CSS replica of the Milestone Institute PowerBI Workshop Certificate
                    <div className="relative border-[14px] border-white shadow-2xl rounded-sm">
                      <div className="relative border-4 border-slate-205 bg-linear-to-br from-slate-50 to-white p-6 sm:p-10 min-h-[440px] flex flex-col justify-between font-sans text-slate-900 text-center select-none">
                        
                        {/* Orange-Dark gray geometric element at top-left matching uploaded image */}
                        <div className="absolute top-0 left-0 w-24 h-16 pointer-events-none opacity-90 flex gap-1">
                          <div className="w-4 bg-orange-500 h-full transform -skew-x-[20deg] origin-top" />
                          <div className="w-1.5 bg-slate-300 h-[80%] transform -skew-x-[20deg] origin-top" />
                          <div className="w-1 bg-slate-200 h-[60%] transform -skew-x-[20deg] origin-top" />
                        </div>

                        {/* Right MIT Badge */}
                        <div className="absolute top-4 right-6 flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-orange-505 flex items-center justify-center text-white font-extrabold text-xs">MIT</div>
                          <div className="text-left font-black tracking-tighter text-slate-900 leading-none">
                            <span className="text-[10px] uppercase block text-orange-500 font-bold">Milestone</span>
                            <span className="text-[7px] uppercase font-bold tracking-widest text-slate-400 block">Institute of Tech</span>
                          </div>
                        </div>

                        <div className="space-y-4 pt-10 my-auto">
                          <h4 className="font-sans font-black text-lg sm:text-xl tracking-wider text-orange-500 uppercase leading-none">
                            CERTIFICATE OF PARTICIPATION
                          </h4>
                          <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 leading-none">- in -</p>
                          <h5 className="font-sans font-black text-sm sm:text-base text-slate-805 tracking-tight block leading-none">
                            PowerBI Workshop
                          </h5>

                          <div className="space-y-3 pt-3 max-w-md mx-auto">
                            <p className="text-xs text-slate-500 leading-relaxed font-sans">
                              This is to certify that <span className="font-black text-slate-900 tracking-tight block text-sm sm:text-base mt-1 uppercase">HARSH SANDEEP HINDALEKAR</span>
                            </p>
                            <p className="text-[10px] text-slate-500 leading-relaxed">
                              participated in the 6 Hours intensive workshop conducted at
                              <span className="font-bold text-slate-700 block mt-1">Milestone Institute of Technology, Thane.</span>
                            </p>
                          </div>
                        </div>

                        {/* Academic Signatures & Date/Logos block */}
                        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                          <div className="space-y-1">
                            <p className="text-slate-400 font-mono text-[9px] uppercase tracking-widest leading-none">DATE COMPLETED</p>
                            <p className="font-mono text-xs font-bold text-slate-800">{selectedCert.date}</p>
                          </div>

                          {/* Autodesk logo mock */}
                          <div className="flex gap-4 items-center">
                            <div className="text-[9px] font-mono border px-1.5 py-0.5 bg-slate-50 text-slate-400 rounded-sm">AUTODESK</div>
                            <div className="text-[9px] font-mono border px-1.5 py-0.5 bg-slate-50 text-slate-405 rounded-sm font-bold">NSIC-TIC</div>
                            <div className="text-[9px] font-mono h-6 w-6 rounded-full border border-dashed flex items-center justify-center text-slate-400 text-[8px] font-black uppercase">ISO</div>
                          </div>

                          <div className="space-y-0.5 select-none text-center">
                            <p className="font-serif italic text-xs text-slate-600 block border-b border-slate-200 pb-0.5 leading-none">Head of Institute</p>
                            <p className="text-slate-400 font-mono text-[8px] uppercase tracking-widest leading-none">SIGNATURE VERIFIED</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  ) : (
                    // Deeply elegant, high-fidelity replica of Ratnam College Ideathon 2026 Certificate matching user images
                    <div className="relative border-12 border-slate-900 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-3 sm:p-5 shadow-2xl overflow-hidden rounded-2xl select-none">
                      <div className="relative border-4 border-slate-350 bg-white p-5 sm:p-8 min-h-[460px] flex flex-col justify-between font-sans text-slate-900">
                        
                        {/* Decorative outer thin frame line */}
                        <div className="absolute inset-1.5 border border-slate-300 pointer-events-none" />

                        {/* Header Segment */}
                        <div className="grid grid-cols-12 gap-2 items-center border-b border-slate-100 pb-5 pt-3">
                          
                          {/* Ratnam Crest Mock on left */}
                          <div className="col-span-3 lg:col-span-2 flex flex-col items-center text-center">
                            <div className="relative w-12 h-12 flex items-center justify-center border border-indigo-200 rounded-full bg-slate-50/50 p-1">
                              <span className="text-[10px] uppercase font-bold text-indigo-950 tracking-tighter leading-none block">RCASC</span>
                            </div>
                            <span className="text-[7px] font-bold text-slate-400 uppercase tracking-widest mt-1 block font-mono font-bold">A-Grade NAAC</span>
                          </div>

                          {/* Central Collegiate Text */}
                          <div className="col-span-6 lg:col-span-8 text-center space-y-1">
                            <h4 className="font-sans font-extrabold text-xs sm:text-sm tracking-wide text-cyan-950 uppercase leading-none">
                              RATNAM COLLEGE OF ARTS, SCIENCE & COMMERCE
                            </h4>
                            <p className="font-sans text-[9px] font-bold text-slate-505 leading-none">
                              (Autonomous)
                            </p>
                            <p className="font-mono text-[8px] text-slate-400 leading-none">
                              Bhandup (W), Mumbai - 400078
                            </p>
                          </div>

                          {/* ARCOMM Brand on Right */}
                          <div className="col-span-3 lg:col-span-2 flex flex-col items-center text-center">
                            <div className="text-blue-900 font-extrabold tracking-widest text-xs uppercase flex flex-col items-center leading-none">
                              <div className="flex h-5 items-baseline gap-0.5">
                                <span className="font-serif italic font-bold text-[11px]">A</span>
                                <span className="font-sans font-black text-[9px]">RCOMM</span>
                              </div>
                              <span className="text-[5px] text-slate-400 block tracking-widest leading-none font-bold">Exploring Possibilities</span>
                            </div>
                          </div>

                        </div>

                        {/* Certificate Core Subject Heading */}
                        <div className="text-center space-y-1.5 py-4">
                          <div className="space-y-0.5">
                            <span className="font-sans font-extrabold tracking-widest text-slate-405 text-[8px] uppercase leading-none block">
                              [ COLLEGE_MILESTONE ]
                            </span>
                            <h5 className="font-sans font-black text-xl tracking-widest text-red-800 uppercase leading-none">
                              IDEATHON 2026
                            </h5>
                          </div>

                          <div className="space-y-0.5">
                            <h6 className="font-serif font-semibold text-base tracking-wide uppercase text-blue-900 italic leading-none">
                              Certificate
                            </h6>
                            <p className="font-sans font-black text-[10px] uppercase tracking-widest text-slate-700">
                              of Participation
                            </p>
                          </div>
                        </div>

                        {/* Certification Verbiage Body */}
                        <div className="text-center space-y-5 max-w-2xl mx-auto px-4">
                          <p className="text-[11px] italic font-serif text-slate-400 leading-none">
                            This is to certify that
                          </p>

                          {/* Name Input with beautiful cursive representation and elegant underlines */}
                          <div className="relative inline-block px-10 border-b border-slate-450">
                            <span className="font-cursive text-3xl text-indigo-950 font-bold leading-none tracking-wide text-center block px-4 py-1">
                              Harsh Sandeep Hindalekar
                            </span>
                          </div>

                          {/* Academic details and rank highlighting */}
                          <div className="text-xs text-slate-600 leading-relaxed space-y-4">
                            <p className="font-sans text-[11px]">
                              studying in <span className="font-mono font-bold tracking-tight border-b border-slate-350 px-2 italic text-slate-800">B.Sc. CS/IT TY</span> has secured <span className="font-semibold text-blue-900 font-serif text-xs sm:text-sm border-b-2 border-indigo-600 px-4 inline-block italic leading-none">1st</span> place in
                            </p>

                            <h6 className="font-sans font-black text-xs text-red-800 uppercase tracking-widest">
                              IDEATHON 2026
                            </h6>

                            <p className="text-[10px] leading-relaxed text-slate-500 max-w-xl mx-auto italic font-serif">
                              an innovation and ideation event focused on Embedded Systems, Internet of Things (IoT), and Artificial Intelligence (AI) organized by{" "}
                              <span className="font-sans font-bold not-italic text-slate-800">Arcomm Tech Solutions Pvt. Ltd.</span> in association with{" "}
                              <span className="font-sans font-bold not-italic text-slate-800 font-bold">NES Ratnam College of Arts, Science & Commerce (Autonomous)</span> on 21st January 2026.
                            </p>
                          </div>
                        </div>

                        {/* Official Signatures Segment */}
                        <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-end gap-6 px-4">
                          
                          {/* Principal Signature Container */}
                          <div className="flex flex-col items-center text-center space-y-1 mx-auto sm:mx-0 w-36">
                            <div className="h-10 flex items-center justify-center font-signature text-7xl text-blue-800/85 -mb-3 opacity-90 select-none">
                              VinitaDhulia
                            </div>
                            <div className="w-full border-t border-slate-300 pt-1">
                              <p className="font-sans font-bold text-[10px] text-slate-850">
                                Dr. Vinita Dhulia
                              </p>
                              <p className="font-mono text-[8px] uppercase tracking-wider text-slate-400">
                                Principal
                              </p>
                            </div>
                          </div>

                          {/* Middle verification info node */}
                          <div className="hidden md:flex flex-col items-center font-mono text-[8px] text-slate-400 text-center pb-2">
                            <span className="font-bold text-slate-350 uppercase tracking-widest block font-mono">[STAMP_VERIFIED]</span>
                            <span className="mt-0.5 text-blue-900 font-bold">21-JAN-2026</span>
                          </div>

                          {/* Founder & CEO ARCOMM Signature Container */}
                          <div className="flex flex-col items-center text-center space-y-1 mx-auto sm:mx-0 w-36">
                            <div className="h-10 flex items-center justify-center font-signature text-7xl text-indigo-805/85 -mb-3 opacity-95 select-none">
                              DrArunRaaza
                            </div>
                            <div className="w-full border-t border-slate-300 pt-1">
                              <p className="font-sans font-bold text-[10px] text-slate-855">
                                Dr. Arun Raaza
                              </p>
                              <p className="font-mono text-[8px] uppercase tracking-wider text-slate-400">
                                Founder & CEO, ARCOMM
                              </p>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Close View Action footer */}
              <div className="flex justify-end pt-2 border-t border-slate-805">
                <button
                  onClick={closeCertificate}
                  className="px-6 py-2 rounded-full bg-slate-900 hover:bg-slate-850 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close Certificate View
                </button>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
