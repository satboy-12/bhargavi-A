import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Github, FolderGit2, CheckCircle2, Eye, Terminal } from "lucide-react";
import { PORTFOLIO_DATA, ProjectItem } from "../data/portfolio";
import { ProjectCaseStudy } from "./ProjectCaseStudy";

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectItem | null>(null);

  const filterCategories = [
    { label: "ALL", filter: "ALL" },
    { label: "WEB APPS", filter: "Web" },
    { label: "MOBILE ERP", filter: "Android" },
    { label: "AUTOMATION", filter: "Automation" },
  ];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (selectedFilter === "ALL") return true;
    if (selectedFilter === "Web") return project.category.includes("Web") || project.category.includes("Frontend");
    if (selectedFilter === "Android") return project.category.includes("Android");
    if (selectedFilter === "Automation") return project.category.includes("Automation");
    return true;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 border-b border-[#292929] bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#292929]"
        >
          <div>
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#D71920] uppercase font-semibold mb-2">
              <span>02</span>
              <span>/</span>
              <span>PROJECTS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F2EEE5] uppercase tracking-tight">
              PROJECTS
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono-tech text-xs text-[#9A9A9A] uppercase mr-2 hidden sm:inline">
              FILTER:
            </span>
            {filterCategories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setSelectedFilter(cat.filter)}
                className={`px-3 py-1.5 font-mono-tech text-xs uppercase tracking-wider transition-all ${
                  selectedFilter === cat.filter
                    ? "bg-[#D71920] text-white font-semibold"
                    : "bg-[#121212] text-[#9A9A9A] hover:text-[#F2EEE5] border border-[#292929]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Technical Sub-bar with subtle entrance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="py-3 border-b border-[#292929] flex items-center justify-between font-mono-tech text-[11px] text-[#9A9A9A]"
        >
          <span>PROJECTS ({filteredProjects.length})</span>
          <span>TECH: REACT • TYPESCRIPT • ANDROID • GOOGLE APPS SCRIPT</span>
        </motion.div>

        {/* Project Editorial Grid */}
        <div className="divide-y divide-[#292929] border-b border-[#292929]">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-[#0c0c0c]/80 transition-colors px-2 sm:px-4"
            >
              {/* Left Column: Index Number & Meta */}
              <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between items-start">
                <div>
                  <span className="font-mono-tech text-4xl sm:text-5xl lg:text-6xl text-[#292929] group-hover:text-[#D71920] font-bold transition-colors">
                    {project.number}
                  </span>
                  <div className="mt-2 font-mono-tech text-xs text-[#9A9A9A] uppercase">
                    {project.year && (
                      <>
                        <span>{project.year}</span>
                        <span className="mx-2 text-[#292929]">/</span>
                      </>
                    )}
                    <span className="text-[#F2EEE5]">{project.role}</span>
                  </div>
                </div>

                <div className="mt-4 hidden lg:block">
                  <span className="inline-block px-2.5 py-1 text-[10px] font-mono-tech uppercase bg-[#141414] border border-[#292929] text-[#9A9A9A]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Middle Column: Core Project Narrative & Features */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="font-mono-tech text-xs text-[#D71920] uppercase tracking-wider block mb-1">
                    {project.tagline}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-[#F2EEE5] group-hover:text-white uppercase tracking-tight transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed">
                  {project.description}
                </p>

                {/* Key Capabilities Bullet Points */}
                <div className="space-y-1.5 pt-2">
                  {project.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#cacaca]">
                      <span className="text-[#D71920] font-bold font-mono-tech mt-0.5">•</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 font-mono-tech text-[11px] uppercase bg-[#121212] border border-[#292929] text-[#F2EEE5] group-hover:border-[#383838] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Actions */}
              <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end h-full gap-4 pt-2">
                <button
                  onClick={() => setActiveCaseStudy(project)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#D71920] hover:bg-[#b5141a] text-white font-mono-tech text-xs uppercase tracking-wider font-semibold transition-all shadow-md group/btn"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#292929] hover:border-[#F2EEE5] bg-[#121212] hover:bg-[#181818] text-[#F2EEE5] font-mono-tech text-xs uppercase tracking-wider transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#9A9A9A]" />
                  <span>REPOSITORY</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Case Study Modal Component */}
      <ProjectCaseStudy
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </section>
  );
};
