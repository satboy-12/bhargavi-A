import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 lg:py-28 border-b border-[#292929] bg-[#080808]">
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
              <span>04</span>
              <span>/</span>
              <span>PROFESSIONAL EXPERIENCE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F2EEE5] uppercase tracking-tight">
              EXPERIENCE
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#9A9A9A] max-w-sm uppercase leading-relaxed">
            [FULL STACK DEVELOPMENT // ANDROID ERP // PROCESS AUTOMATION]
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="py-8 divide-y divide-[#292929]">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Period & Organization */}
              <div className="lg:col-span-4 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#D71920]/10 border border-[#D71920]/30 font-mono-tech text-xs text-[#D71920]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-[#F2EEE5] uppercase tracking-tight">
                  {exp.role}
                </h3>

                <div className="text-sm font-mono-tech text-[#9A9A9A] uppercase">
                  <p className="text-[#F2EEE5] font-semibold">{exp.organization}</p>
                  <p className="flex items-center gap-1.5 mt-1 text-xs">
                    <MapPin className="w-3 h-3 text-[#D71920]" />
                    <span>{exp.location}</span>
                  </p>
                </div>
              </div>

              {/* Right Column: Key Achievements and Responsibilities */}
              <div className="lg:col-span-8 bg-[#0d0d0d] border border-[#292929] p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="font-mono-tech text-xs text-[#D71920] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#D71920]" />
                    RESPONSIBILITIES & DELIVERABLES
                  </h4>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm text-[#cacaca] leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Employed */}
                <div className="pt-6 border-t border-[#292929]">
                  <span className="font-mono-tech text-xs text-[#9A9A9A] uppercase block mb-3">
                    TECHNOLOGIES:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 font-mono-tech text-[11px] uppercase bg-[#141414] border border-[#292929] text-[#F2EEE5]"
                      >
                        +{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
