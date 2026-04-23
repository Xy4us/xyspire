"use client";

import { motion } from "framer-motion";
import { Check, AlertTriangle, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const COMPARISON_DATA = [
  {
    feature: "Approach",
    sanjaya: { text: "Process mapping first", status: "success" },
    others: { text: "Tool-first approach", status: "warning" },
    inHouse: { text: "Depends on hire", status: "warning" },
  },
  {
    feature: "Workflow",
    sanjaya: { text: "Around your operations", status: "success" },
    others: { text: "Mostly templated", status: "error" },
    inHouse: { text: "If expertise exists", status: "success" },
  },
  {
    feature: "Speed",
    sanjaya: { text: "Weeks, not months", status: "success" },
    others: { text: "Most often delayed", status: "warning" },
    inHouse: { text: "Hiring & onboarding", status: "error" },
  },
  {
    feature: "Optimization",
    sanjaya: { text: "Continuous improvement", status: "success" },
    others: { text: "Setup & disappear", status: "warning" },
    inHouse: { text: "Limited by bandwidth", status: "warning" },
  },
  {
    feature: "Cost Efficiency",
    sanjaya: { text: "Fixed project clarity", status: "success" },
    others: { text: "Scope creep common", status: "warning" },
    inHouse: { text: "Salary + overhead", status: "error" },
  },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "success") return <Check className="w-5 h-5 text-white" />;
  if (status === "warning")
    return <AlertTriangle className="w-5 h-5 text-white/20" />;
  if (status === "error") return <X className="w-5 h-5 text-white/20" />;
  return null;
};

export const WhyUs = () => {
  return (
    <section className="relative bg-[#010004] pt-32 overflow-hidden">
      {/* Background Image with Fade */}
      <div className="absolute inset-0 z-0">
        <img
          src="/why_us.jpeg"
          alt="Why Us Background"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010004] via-transparent to-[#010004]" />
        <div className="absolute inset-0 bg-[#010004]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="flex justify-center mb-8">
            <SectionHeading>WHY US</SectionHeading>
          </div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight text-white mb-8">
            Built for Real Business
            <br />
            Impact
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Most agencies talk about AI. We build systems that reduce manual
            work, improve accuracy, and scale with your operations.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="w-full">
          {/* Desktop Table (Hidden on Mobile) */}
          <div className="hidden md:block border border-white/5 rounded-lg overflow-hidden bg-white/2 backdrop-blur-sm">
            {/* Table Header */}
            <div className="grid grid-cols-4 border-b border-white/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-8 border-r border-white/5"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-8 border-r border-white/5 bg-white/[0.03] flex items-center gap-3"
              >
                <img
                  src="/logo.png"
                  alt="xyspire logo"
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-8 border-r border-white/5 flex items-center"
              >
                <span className="text-xl font-medium text-white">
                  Other Agencies
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-8 flex items-center"
              >
                <span className="text-xl font-medium text-white">
                  Hire In House
                </span>
              </motion.div>
            </div>

            {/* Table Rows */}
            {COMPARISON_DATA.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-4 border-b border-white/5 last:border-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-8 border-r border-white/5 flex items-center"
                >
                  <span className="text-base font-medium text-white/70">
                    {row.feature}
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-8 border-r border-white/5 bg-white/[0.03] flex items-center gap-4"
                >
                  <StatusIcon status={row.sanjaya.status} />
                  <span className="text-base text-white/90">
                    {row.sanjaya.text}
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-8 border-r border-white/5 flex items-center gap-4"
                >
                  <StatusIcon status={row.others.status} />
                  <span className="text-base text-white/40">
                    {row.others.text}
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-8 flex items-center gap-4"
                >
                  <StatusIcon status={row.inHouse.status} />
                  <span className="text-base text-white/40">
                    {row.inHouse.text}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Mobile Table (Hidden on Desktop) */}
          <div className="md:hidden border border-white/5 rounded-sm overflow-hidden bg-white/[0.02] backdrop-blur-sm">
            {/* Header Row */}
            <div className="grid grid-cols-3 border-b border-white/5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-4 border-r border-white/5 bg-white/[0.03] flex flex-col items-center justify-center gap-2 text-center"
              >
                <img
                  src="/logo.png"
                  alt="xyspire logo"
                  className="h-6 w-auto object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-4 border-r border-white/5 flex items-center justify-center text-center"
              >
                <span className="text-xs font-medium text-white">
                  Other Agencies
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-4 flex items-center justify-center text-center"
              >
                <span className="text-xs font-medium text-white">
                  Hire In House
                </span>
              </motion.div>
            </div>

            {/* Feature Blocks */}
            {COMPARISON_DATA.map((row, index) => (
              <div
                key={index}
                className="border-b border-white/5 last:border-0"
              >
                {/* Feature Name */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-4 bg-white/[0.01] border-b border-white/5"
                >
                  <span className="text-sm font-medium text-white/70">
                    {row.feature}
                  </span>
                </motion.div>
                {/* Data Grid */}
                <div className="grid grid-cols-3">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="p-4 border-r border-white/5 bg-white/[0.03] flex flex-col gap-3"
                  >
                    <StatusIcon status={row.sanjaya.status} />
                    <span className="text-[11px] leading-tight text-white/90">
                      {row.sanjaya.text}
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="p-4 border-r border-white/5 flex flex-col gap-3"
                  >
                    <StatusIcon status={row.others.status} />
                    <span className="text-[11px] leading-tight text-white/40">
                      {row.others.text}
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="p-4 flex flex-col gap-3"
                  >
                    <StatusIcon status={row.inHouse.status} />
                    <span className="text-[11px] leading-tight text-white/40">
                      {row.inHouse.text}
                    </span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
