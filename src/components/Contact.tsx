import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Github, Copy, Check, Send, ArrowUpRight, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    
    // Open default mail client with prefilled details
    const subject = encodeURIComponent(formState.subject || `Inquiry from ${formState.name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-[#292929] bg-[#080808]">
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
              <span>06</span>
              <span>/</span>
              <span>CONTACT</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F2EEE5] uppercase tracking-tight">
              GET IN TOUCH
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#9A9A9A] max-w-sm uppercase leading-relaxed">
            [{personal.email} // {personal.phone}]
          </p>
        </motion.div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12">
          {/* Left: Contact Channels with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="font-mono-tech text-xs text-[#D71920] uppercase tracking-wider block mb-2">
                DIRECT CONTACT CHANNELS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#F2EEE5] uppercase leading-tight mb-4">
                LET'S DISCUSS YOUR ARCHITECTURE OR UPCOMING PROJECT.
              </h3>
              <p className="text-sm text-[#9A9A9A] leading-relaxed">
                Reach out for full-stack engineering opportunities, web development, Android applications, or automated workflow integrations.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-5 bg-[#0c0c0c] border border-[#292929] hover:border-[#383838] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-tech text-[10px] text-[#9A9A9A] uppercase">
                    PRIMARY ELECTRONIC MAIL
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 font-mono-tech text-[10px] text-[#D71920] hover:text-white transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="font-mono-tech text-sm sm:text-base text-[#F2EEE5] hover:text-[#D71920] transition-colors flex items-center justify-between"
                >
                  <span className="truncate">{personal.email}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-[#9A9A9A]" />
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-5 bg-[#0c0c0c] border border-[#292929] hover:border-[#383838] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-tech text-[10px] text-[#9A9A9A] uppercase">
                    TELEPHONE & WHATSAPP
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="flex items-center gap-1 font-mono-tech text-[10px] text-[#D71920] hover:text-white transition-colors"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`tel:${personal.phone.replace(/[^0-9+]/g, "")}`}
                  className="font-mono-tech text-sm sm:text-base text-[#F2EEE5] hover:text-[#D71920] transition-colors flex items-center justify-between"
                >
                  <span>{personal.phone}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-[#9A9A9A]" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#0c0c0c] border border-[#292929] hover:border-[#D71920] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#D71920]" />
                    <span className="font-mono-tech text-xs text-[#F2EEE5] uppercase">
                      LINKEDIN
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#9A9A9A] group-hover:text-white transition-colors" />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#0c0c0c] border border-[#292929] hover:border-[#D71920] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#D71920]" />
                    <span className="font-mono-tech text-xs text-[#F2EEE5] uppercase">
                      GITHUB
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#9A9A9A] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Message Dispatch Form with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 bg-[#0c0c0c] border border-[#292929] p-6 sm:p-8 md:p-10"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#292929]">
              <span className="font-mono-tech text-xs text-[#D71920] font-semibold uppercase">
                // TRANSMISSION TERMINAL
              </span>
              <span className="font-mono-tech text-[10px] text-[#9A9A9A]">
                ENCRYPTION: STANDARD MAILTO
              </span>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-[#D71920]/20 border border-[#D71920] text-[#D71920] mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display text-2xl text-[#F2EEE5] uppercase">
                  TRANSMISSION DISPATCHED
                </h4>
                <p className="font-mono-tech text-xs text-[#9A9A9A] max-w-md mx-auto">
                  Your mail client has been opened with your inquiry details. Alternatively, email directly to {personal.email}.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 border border-[#292929] text-xs font-mono-tech uppercase text-[#F2EEE5] hover:border-[#D71920] transition-colors"
                >
                  SEND ANOTHER TRANSMISSION
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono-tech text-xs text-[#9A9A9A] uppercase mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full bg-[#121212] border border-[#292929] focus:border-[#D71920] px-4 py-3 text-sm text-[#F2EEE5] font-mono-tech placeholder:text-[#555] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-tech text-xs text-[#9A9A9A] uppercase mb-2">
                      YOUR EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-[#121212] border border-[#292929] focus:border-[#D71920] px-4 py-3 text-sm text-[#F2EEE5] font-mono-tech placeholder:text-[#555] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono-tech text-xs text-[#9A9A9A] uppercase mb-2">
                    PROJECT FOCUS / SUBJECT
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Full Stack Engineering Role / Project Inquiry"
                    className="w-full bg-[#121212] border border-[#292929] focus:border-[#D71920] px-4 py-3 text-sm text-[#F2EEE5] font-mono-tech placeholder:text-[#555] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono-tech text-xs text-[#9A9A9A] uppercase mb-2">
                    PROJECT DETAILS OR MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Provide details about your project scope, timeline, or engineering opportunity..."
                    className="w-full bg-[#121212] border border-[#292929] focus:border-[#D71920] px-4 py-3 text-sm text-[#F2EEE5] font-mono-tech placeholder:text-[#555] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="font-mono-tech text-[10px] text-[#9A9A9A]">
                    DIRECT EMAIL: {personal.email}
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D71920] hover:bg-[#b5141a] text-white font-mono-tech text-xs uppercase tracking-wider font-semibold transition-all shadow-lg"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>SEND MESSAGE</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
