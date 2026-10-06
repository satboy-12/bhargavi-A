import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#hero" },
    { name: "Summary", href: "#summary" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#292929] py-3.5"
            : "bg-transparent border-b border-[#292929]/50 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Technical Identity */}
            <a
              href="#hero"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Bhargavi A. Portfolio Home"
            >
              <div className="w-8 h-8 bg-[#D71920] flex items-center justify-center font-bold text-white text-xs tracking-wider transition-transform group-hover:scale-105">
                BA
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg tracking-wider text-[#F2EEE5] group-hover:text-white transition-colors">
                  {PORTFOLIO_DATA.personal.name}
                </span>
                <span className="font-mono-tech text-[10px] tracking-widest text-[#9A9A9A] uppercase">
                  {PORTFOLIO_DATA.personal.title}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`font-mono-tech text-xs tracking-wider uppercase px-3 py-1.5 transition-all duration-200 relative ${
                      isActive
                        ? "text-white font-medium"
                        : "text-[#9A9A9A] hover:text-[#F2EEE5]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navIndicator"
                        className="absolute inset-0 bg-[#292929]/60 border-b-2 border-[#D71920] -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Quick Action */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono-tech uppercase font-semibold text-white bg-[#D71920] hover:bg-[#b5141a] transition-colors"
              >
                <span>CONTACT</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F2EEE5] hover:text-white border border-[#292929] bg-[#121212] focus:outline-none focus:ring-1 focus:ring-[#D71920]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#0c0c0c] border-b border-[#292929] px-6 py-8 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="pb-3 border-b border-[#292929]">
                <span className="font-mono-tech text-xs text-[#9A9A9A]">NAVIGATION</span>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 border border-transparent hover:border-[#292929] hover:bg-[#141414] font-mono-tech text-sm tracking-wider uppercase text-[#F2EEE5] transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[#D71920] text-xs">0{idx + 1}</span>
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#9A9A9A]" />
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-[#292929] flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 bg-[#D71920] text-white font-mono-tech text-xs tracking-wider uppercase font-semibold hover:bg-[#b5141a] transition-colors"
                >
                  START A CONVERSATION
                </a>
                <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#9A9A9A] pt-2">
                  <span>{PORTFOLIO_DATA.personal.email}</span>
                  <span>{PORTFOLIO_DATA.personal.phone}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
