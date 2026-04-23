"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const Hero = () => {
  return (
    <section className="relative bg-[#010004] flex flex-col justify-between pt-24 pb-10 overflow-hidden min-h-screen">
      {/* Background Video - Contained/Positioned */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover brightness-[0.75] contrast-[1.2]"
        >
          <source src="/finalhero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#010004]/90 via-transparent to-[#010004]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full flex-1 flex flex-col justify-between pb-2">
        {/* Top Content Row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 md:space-y-2 text-[11px] tracking-[0.25em] text-white uppercase"
          >
            <p className="flex items-center gap-4">
              <span>/</span> WEB DESIGNING
            </p>
            <p className="flex items-center gap-4">
              <span>/</span> UI DEVELOPMENT
            </p>
            <p className="flex items-center gap-4">
              <span>/</span> BRAND STRATEGY
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-[420px] text-xl md:text-lg leading-snug text-white/90 font-light text-center md:text-right text-balance self-center md:self-auto"
          >
            We build high-performance <div className="w-full text-left md:text-left"> websites that blend clarity, precision,<br/> and seamless user experience.</div>
          </motion.div>
        </div>

        {/* Bottom Content Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-12 mt-20 md:mt-0">
          <div className="space-y-8 md:space-y-8 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <SectionHeading>WE DESIGN 100+ BUSINESS</SectionHeading>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-[55px] font-light md:font-normal tracking-tighter leading-[1.1] md:leading-[0.85] text-white"
            >
              Bold.<br/> Precise.<br />
              Exceptional.
            </motion.h1>
          </div>

          {/* Floating Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 p-5 rounded-[24px] flex items-center gap-5 w-full md:max-w-[360px] group hover:border-white/20 transition-all cursor-pointer shadow-2xl"
          >
            <div className="relative w-20 h-20 rounded-full md:rounded-2xl overflow-hidden bg-white/10 shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" 
                alt="xyspire"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-white truncate">Talk with Us</h3>
              <p className="text-[10px] font-bold tracking-[0.15em] text-white/30 uppercase mt-1">xyspire</p>
              <div className="mt-4 bg-white text-black text-[12px] font-bold py-2.5 px-5 rounded-xl flex items-center justify-between group-hover:bg-white/90 transition-colors w-full">
                Book 15-mins call
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
