import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProfessionalSummary } from "./components/ProfessionalSummary";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const sections = ["hero", "summary", "projects", "skills", "experience", "education", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2EEE5] selection:bg-[#D71920] selection:text-white flex flex-col font-sans">
      {/* Top Fixed Editorial Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <ProfessionalSummary />
        <Projects />
        <Skills />
        <Experience />

        {/* Education Section */}
        <section id="education" className="py-20 lg:py-28 border-b border-[#292929] bg-[#080808]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Education />
          </div>
        </section>

        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
