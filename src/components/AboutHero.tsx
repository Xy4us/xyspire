"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#010004]">
      {/* Background Image with Fade */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/why_us.jpeg" 
          alt="About Us Background" 
          className="w-full h-full object-cover  scale-110"
          referrerPolicy="no-referrer"
        />
        // <div className="absolute inset-0 bg-gradient-to-b from-[#010004]/90 via-transparent to-[#010004]" />
        // <div className="absolute inset-0 bg-[#010004]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="flex justify-center">
              <SectionHeading>ABOUT US</SectionHeading>
            </div>
            <h1 className="text-3xl md:text-[55px]  tracking-tighter leading-[0.9] text-white max-w-5xl">
              We Don’t Just Build Websites —<br />
              <span className="text-white/40">We Help You Get More Customers</span>
            </h1>
            <p className="text-white/60 text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              At Xyspire, we believe a website should do one simple thing: bring you more calls, more bookings, and more business.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
    </section>
  );
};
