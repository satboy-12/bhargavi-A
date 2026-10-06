import React from "react";
import { motion, type Variants } from "motion/react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, GraduationCap } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";
import clientPortrait from "../assets/bhargavi_portrait_1791306509733.jpeg";

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between border-b border-[#292929] bg-[#080808] editorial-grain overflow-hidden"
    >
      {/* Top Location and Degree Header Bar */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-y border-[#292929] font-mono-tech text-xs text-[#9A9A9A]">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#D71920]" />
            <span className="text-[#F2EEE5] uppercase">{personal.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5 text-[#D71920]" />
            <span>{personal.degree}</span>
            <span className="text-[#292929]">/</span>
            <span className="text-[#F2EEE5]">{personal.specialization}</span>
          </div>
        </div>
      </div>

      {/* Main Editorial Grid */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          {/* Left Column: Editorial Typography & Information */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Role Header */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-3">
              <span className="inline-block w-2.5 h-2.5 bg-[#D71920]" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#D71920] uppercase font-semibold">
                {personal.title}
              </span>
            </motion.div>

            {/* Name Headline */}
            <motion.div variants={itemVariants} className="mb-4">
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl xl:text-9xl tracking-tight text-[#F2EEE5] uppercase leading-[0.88] select-none">
                BHARGAVI
                <span className="block text-[#9A9A9A]">
                  A.
                </span>
              </h1>
            </motion.div>

            {/* Academic & Location Focus */}
            <motion.div variants={itemVariants} className="mb-4 space-y-1 font-mono-tech text-xs sm:text-sm text-[#cacaca]">
              <p className="text-[#D71920] uppercase font-medium">
                {personal.degree} — {personal.specialization}
              </p>
              <p className="text-[#9A9A9A] uppercase">
                {personal.location}
              </p>
            </motion.div>

            {/* Professional Summary */}
            <motion.div variants={itemVariants} className="mb-6 max-w-xl">
              <p className="text-[#9A9A9A] text-sm sm:text-base leading-relaxed">
                {personal.summary}
              </p>
            </motion.div>

            {/* Core Technologies from Resume */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
              {["React", "TypeScript", "Node.js", "Android ERP", "Google Apps Script", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-mono-tech uppercase bg-[#121212] border border-[#292929] text-[#F2EEE5]"
                >
                  +{tech}
                </span>
              ))}
            </motion.div>

            {/* Actions & Links */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#D71920] hover:bg-[#b5141a] text-white font-mono-tech text-xs uppercase tracking-wider font-semibold transition-all shadow-lg"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#292929] hover:border-[#F2EEE5] bg-[#101010] hover:bg-[#181818] text-[#F2EEE5] font-mono-tech text-xs uppercase tracking-wider transition-colors"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4 text-[#9A9A9A]" />
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#292929] hover:border-[#D71920] bg-[#121212] text-[#9A9A9A] hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#292929] hover:border-[#D71920] bg-[#121212] text-[#9A9A9A] hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="p-3 border border-[#292929] hover:border-[#D71920] bg-[#121212] text-[#9A9A9A] hover:text-white transition-colors"
                  aria-label="Email Bhargavi"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Editorial Photo Frame with Original Client Photograph */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              variants={itemVariants}
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-none"
            >
              {/* Large Background Typography Behind Photograph */}
              <div
                className="absolute -top-10 -left-6 sm:-left-10 font-display text-7xl sm:text-8xl md:text-9xl text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter z-0"
                aria-hidden="true"
              >
                PORTFOLIO
              </div>

              {/* Framed Container */}
              <div className="relative z-10 p-2.5 sm:p-3 bg-[#0d0d0d] border border-[#292929] shadow-2xl">
                {/* Visual Registration Crosses */}
                <span className="absolute -top-1.5 -left-1.5 w-3 h-3 text-[#D71920] font-mono-tech text-xs leading-none select-none">
                  +
                </span>
                <span className="absolute -top-1.5 -right-1.5 w-3 h-3 text-[#D71920] font-mono-tech text-xs leading-none select-none">
                  +
                </span>
                <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 text-[#D71920] font-mono-tech text-xs leading-none select-none">
                  +
                </span>
                <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 text-[#D71920] font-mono-tech text-xs leading-none select-none">
                  +
                </span>

                {/* Top Plate Metadata */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#292929] font-mono-tech text-[10px] text-[#9A9A9A]">
                  <span className="text-[#F2EEE5] font-semibold">BHARGAVI A.</span>
                  <span>FULL STACK DEVELOPER</span>
                </div>

                {/* The Image Container — Original Client Photograph Asset */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#141414] border border-[#292929]">
                  <img
                    src={clientPortrait}
                    alt="Bhargavi A."
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle CSS overlay gradient at bottom edge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Plate Identifier */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono-tech text-[10px] text-[#F2EEE5] bg-[#080808]/85 backdrop-blur-sm border border-[#292929] p-2">
                    <div>
                      <p className="font-semibold text-white">BHARGAVI A.</p>
                      <p className="text-[#9A9A9A] text-[9px] uppercase">{personal.location}</p>
                    </div>
                    <span className="text-[#D71920] font-bold uppercase">{personal.title}</span>
                  </div>
                </div>

                {/* Bottom Plate Technical Footer */}
                <div className="mt-2.5 pt-2 border-t border-[#292929] flex items-center justify-between font-mono-tech text-[10px] text-[#9A9A9A]">
                  <span>{personal.degree}</span>
                  <span className="text-[#F2EEE5]">{personal.specialization}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Ticker */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="border-t border-[#292929] pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono-tech text-xs text-[#9A9A9A]">
          <div className="flex items-center gap-6">
            <span className="text-[#D71920] font-semibold">PROJECTS:</span>
            <span>KIDSPIRE</span>
            <span className="text-[#292929]">/</span>
            <span>LUMEN</span>
            <span className="text-[#292929]">/</span>
            <span>BS ROCKS CREATIONS ERP</span>
            <span className="text-[#292929]">/</span>
            <span>ORBITRA</span>
            <span className="text-[#292929]">/</span>
            <span>GOOGLE SHEETS AUTOMATION</span>
          </div>
          <a
            href="#projects"
            className="flex items-center gap-2 text-[#F2EEE5] hover:text-[#D71920] transition-colors"
          >
            <span>VIEW WORK</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
