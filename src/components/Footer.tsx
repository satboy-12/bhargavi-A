import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#292929] text-[#9A9A9A] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#292929]">
          {/* Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-[#D71920] flex items-center justify-center font-bold text-white text-xs tracking-wider">
                BA
              </div>
              <span className="font-display text-xl text-[#F2EEE5] tracking-wide">
                {personal.name}
              </span>
            </div>
            <p className="font-mono-tech text-xs text-[#9A9A9A] uppercase max-w-sm leading-relaxed">
              {personal.title} — {personal.location}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#292929] hover:border-[#D71920] bg-[#0d0d0d] text-[#9A9A9A] hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#292929] hover:border-[#D71920] bg-[#0d0d0d] text-[#9A9A9A] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 border border-[#292929] hover:border-[#D71920] bg-[#0d0d0d] text-[#9A9A9A] hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Index */}
          <div className="md:col-span-4 space-y-2 font-mono-tech text-xs">
            <span className="text-[#F2EEE5] font-semibold uppercase block mb-3">
              NAVIGATION
            </span>
            <div className="grid grid-cols-2 gap-2 uppercase">
              <a href="#hero" className="hover:text-[#D71920] transition-colors">
                [00] Overview
              </a>
              <a href="#summary" className="hover:text-[#D71920] transition-colors">
                [01] Summary
              </a>
              <a href="#projects" className="hover:text-[#D71920] transition-colors">
                [02] Projects
              </a>
              <a href="#skills" className="hover:text-[#D71920] transition-colors">
                [03] Skills
              </a>
              <a href="#experience" className="hover:text-[#D71920] transition-colors">
                [04] Experience
              </a>
              <a href="#education" className="hover:text-[#D71920] transition-colors">
                [05] Education
              </a>
            </div>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-3 flex md:flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#121212] hover:bg-[#181818] border border-[#292929] hover:border-[#D71920] text-[#F2EEE5] font-mono-tech text-xs uppercase tracking-wider transition-colors"
              aria-label="Scroll to top"
            >
              <span>TOP OF PAGE</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#D71920]" />
            </button>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-[11px] text-[#9A9A9A]">
          <div>
            <span>{personal.name} — {personal.title}</span>
          </div>
          <div>
            <span>{personal.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
