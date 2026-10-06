import React from "react";
import { motion } from "motion/react";
import { Code, Server, Smartphone, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  const categoryIcons = [Code, Server, Smartphone];

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-[#292929] bg-[#080808]">
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
              <span>03</span>
              <span>/</span>
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F2EEE5] uppercase tracking-tight">
              SKILLS & TECHNOLOGIES
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#9A9A9A] max-w-sm uppercase leading-relaxed">
            [FULL STACK DEVELOPMENT // MOBILE ANDROID // WORKFLOW AUTOMATION]
          </p>
        </motion.div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-x border-b border-[#292929] mt-8">
          {skills.map((category, catIdx) => {
            const Icon = categoryIcons[catIdx] || Terminal;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
                className={`p-8 bg-[#0b0b0b] hover:bg-[#101010] transition-colors relative flex flex-col justify-between ${
                  catIdx !== skills.length - 1 ? "lg:border-r border-b lg:border-b-0 border-[#292929]" : ""
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 border border-[#292929] bg-[#141414] text-[#D71920]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono-tech text-xs text-[#9A9A9A] uppercase">
                        SECTOR 0{catIdx + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl text-[#F2EEE5] uppercase tracking-wide mb-6">
                    {category.category}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-2 pt-2 border-t border-[#292929]">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={skill}
                        className="flex items-center justify-between p-2.5 bg-[#121212] border border-[#292929] hover:border-[#3d3d3d] transition-colors group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-[#D71920] font-mono-tech text-[10px]">
                            0{idx + 1}
                          </span>
                          <span className="font-mono-tech text-xs text-[#F2EEE5] group-hover:text-white transition-colors">
                            {skill}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
