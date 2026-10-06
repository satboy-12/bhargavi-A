import React from "react";
import { motion, type Variants } from "motion/react";
import { Layers, Smartphone, Workflow } from "lucide-react";

export const ProfessionalSummary: React.FC = () => {
  const pillars = [
    {
      num: "01",
      icon: Layers,
      title: "Full Stack Web Architecture",
      desc: "Engineering responsive web systems with React, TypeScript, and modern styling tools. Delivering clean component hierarchies, state management, and high-performance user journeys.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    },
    {
      num: "02",
      icon: Smartphone,
      title: "Mobile ERP & Enterprise Solutions",
      desc: "Constructing production Android applications for commerce and inventory operations. Designed the BS Rocks Creations ERP with live point-of-sale invoicing, SKU tracking, and thermal billing.",
      tags: ["Android", "SQLite", "POS Billing", "Inventory"],
    },
    {
      num: "03",
      icon: Workflow,
      title: "Workflow Automation & Cloud Pipelines",
      desc: "Automating repetitive business processes through Google Apps Script, REST APIs, and automated triggers. Connecting external web forms to structured spreadsheets with zero manual latency.",
      tags: ["Google Apps Script", "Webhooks", "Sheets API", "ETL"],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
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
    <section id="summary" className="py-20 lg:py-28 border-b border-[#292929] bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#292929]"
        >
          <div>
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#D71920] uppercase font-semibold mb-2">
              <span>01</span>
              <span>/</span>
              <span>EXECUTIVE OVERVIEW</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F2EEE5] uppercase tracking-tight">
              PROFESSIONAL SUMMARY
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#9A9A9A] max-w-sm uppercase leading-relaxed">
            [FOCUS: ARCHITECTURE // RESPONSIVE INTERFACES // DATA PIPELINES // ENTERPRISE UTILITY]
          </p>
        </motion.div>

        {/* Narrative & Editorial Bio with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 border-b border-[#292929] items-center"
        >
          <div className="lg:col-span-5">
            <span className="font-mono-tech text-xs text-[#D71920] block mb-2 uppercase">
              // PROFILE STATEMENT
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-[#F2EEE5] uppercase leading-snug">
              ENGINEERING RESILIENT DIGITAL PRODUCTS FROM SPECIFICATION TO PRODUCTION.
            </h3>
          </div>

          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#9A9A9A] leading-relaxed">
            <p>
              <strong className="text-[#F2EEE5] font-medium">Bhargavi A.</strong> is a Full Stack Developer
              dedicated to creating scalable digital platforms, modern web interfaces, and purpose-built enterprise
              applications. Her engineering approach couples strict TypeScript typing and responsive component design with
              robust backend APIs and automated data pipelines.
            </p>
            <p>
              With practical experience ranging from children's educational web software (Kidspire) to high-throughput
              point-of-sale ERP Android systems (BS Rocks Creations) and event-driven spreadsheet automation, she bridges
              user interface precision with operational data fidelity.
            </p>
          </div>
        </motion.div>

        {/* Core Architectural Pillars with Staggered Scroll Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border-x border-b border-[#292929]"
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className={`p-8 bg-[#0c0c0c] hover:bg-[#121212] transition-colors relative group ${
                  idx !== pillars.length - 1 ? "md:border-r border-b md:border-b-0 border-[#292929]" : ""
                }`}
              >
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono-tech text-sm text-[#D71920] font-bold">
                    [{pillar.num}]
                  </span>
                  <div className="p-2 border border-[#292929] bg-[#161616] text-[#F2EEE5] group-hover:text-[#D71920] group-hover:border-[#D71920] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <h4 className="font-display text-xl text-[#F2EEE5] uppercase tracking-wide mb-3 group-hover:text-white transition-colors">
                  {pillar.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#9A9A9A] leading-relaxed mb-6">
                  {pillar.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#292929]">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 font-mono-tech text-[10px] text-[#9A9A9A] bg-[#181818] border border-[#292929] uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
