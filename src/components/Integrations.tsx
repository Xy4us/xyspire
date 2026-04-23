"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import {
  Cpu,
  Layers,
  Zap,
  Code2,
  Globe,
  Database,
  Cloud,
  Github,
  Figma,
  Terminal,
} from "lucide-react";

const TECH_STACK = [
  { icon: <Code2 className="w-7 h-7" />, name: "React" },
  { icon: <Zap className="w-7 h-7" />, name: "Next.js" },
  { icon: <Layers className="w-7 h-7" />, name: "Tailwind" },
  { icon: <Cpu className="w-7 h-7" />, name: "Framer" },
  { icon: <Globe className="w-7 h-7" />, name: "TypeScript" },
  { icon: <Database className="w-7 h-7" />, name: "PostgreSQL" },
  { icon: <Cloud className="w-7 h-7" />, name: "Vercel" },
  { icon: <Github className="w-7 h-7" />, name: "GitHub" },
  { icon: <Figma className="w-7 h-7" />, name: "Figma" },
  { icon: <Terminal className="w-7 h-7" />, name: "Node.js" },
];

export const Integrations = () => {
  return (
    <section className="bg-[#010004] pt-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Heading FIRST */}
        <div className="flex justify-center mb-10">
          <SectionHeading>INTEGRATION</SectionHeading>
        </div>

        {/* Logo Grid SECOND */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-14 max-w-2xl mx-auto">
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="aspect-square bg-[#1a1a1d] border border-white/5 rounded-lg flex items-center justify-center text-white/30 hover:text-white/80 hover:bg-white/5 transition-all duration-500 group cursor-default"
            >
              <div className="group-hover:scale-110 transition-transform duration-500">
                {tech.icon}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Title + Content THIRD */}
        <div className="text-center space-y-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-[55px] font-light tracking-tighter leading-[1.1] text-white max-w-3xl mx-auto"
          >
            Connected Systems,
            <br />
            Not More Tools
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/40 max-w-2xl mx-auto "
          >
            Your design, development, and deployment workflows working as one
            unified ecosystem. We integrate with the platforms you already use
            to build seamless digital experiences.
          </motion.p>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none" />
    </section>
  );
};
