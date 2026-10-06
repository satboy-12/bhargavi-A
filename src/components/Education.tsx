import React from "react";
import { motion } from "motion/react";
import { GraduationCap, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-2 font-mono-tech text-xs text-[#D71920] uppercase font-semibold"
      >
        <span>05</span>
        <span>/</span>
        <span>EDUCATION</span>
      </motion.div>

      <div className="space-y-6">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 bg-[#0b0b0b] border border-[#292929]"
          >
            <div className="flex items-center gap-3 text-[#D71920] mb-4">
              <GraduationCap className="w-5 h-5" />
              <span className="font-mono-tech text-xs uppercase font-semibold">
                UNDERGRADUATE DEGREE
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-[#F2EEE5] uppercase tracking-tight mb-2">
              {edu.degree}
            </h3>

            <div className="font-mono-tech text-sm text-[#D71920] uppercase mb-4 font-medium">
              SPECIALIZATION: {edu.specialization}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#9A9A9A] uppercase pt-4 border-t border-[#292929]">
              <MapPin className="w-3.5 h-3.5 text-[#D71920]" />
              <span>{edu.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
