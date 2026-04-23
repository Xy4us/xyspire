"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";

const BUSINESS_TYPES = [
  {
    title: "Plumbing Professionals",
    description: "We build websites that make it easy for customers to find you during emergencies and book services instantly.",
    image: "https://picsum.photos/seed/plumbing-pro/1200/800",
    number: "01"
  },
  {
    title: "Electrical Experts",
    description: "Showcase your certifications and services with a professional online presence that builds immediate trust.",
    image: "https://picsum.photos/seed/electrician-pro/1200/800",
    number: "02"
  },
  {
    title: "Cleaning Services",
    description: "Automate your booking process and let your customers schedule cleanings while you focus on the job.",
    image: "https://picsum.photos/seed/cleaning-pro/1200/800",
    number: "03"
  },
  {
    title: "HVAC Specialists",
    description: "From furnace repairs to AC installations, we help you capture local leads when they need you most.",
    image: "https://picsum.photos/seed/hvac-pro/1200/800",
    number: "04"
  }
];

export const AboutStackingCards = () => {
  return (
    <section className="relative bg-[#010004] py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex justify-center mb-8">
            <SectionHeading>BUILT FOR YOU</SectionHeading>
          </div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight text-white max-w-3xl">
            Specialized Solutions for Local Service Leaders
          </h2>
        </div>

        <div className="flex flex-col gap-12 md:gap-0">
          {BUSINESS_TYPES.map((business, index) => (
            <StackingCard 
              key={index} 
              business={business} 
              index={index} 
              total={BUSINESS_TYPES.length} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StackingCard = ({ business, index, total }: { business: typeof BUSINESS_TYPES[0], index: number, total: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Stacking offset
  const topOffset = 100 + index * 40;

  return (
    <div 
      ref={cardRef}
      className="sticky w-full flex justify-center mb-12 md:mb-32"
      style={{ top: `${topOffset}px` }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full bg-[#1a1a1d] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
      >
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
          <div className="text-white/20 text-5xl md:text-7xl font-light mb-6 font-mono">
            {business.number}
          </div>
          <h3 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tight">
            {business.title}
          </h3>
          <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-md">
            {business.description}
          </p>
        </div>
        <div className="flex-1 relative aspect-video md:aspect-auto min-h-[300px]">
          <img 
            src={business.image} 
            alt={business.title} 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1d] via-transparent to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1d] via-transparent to-transparent md:hidden" />
        </div>
      </motion.div>
    </div>
  );
};
