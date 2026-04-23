"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "./SectionHeading";

const SERVICES = [
  {
    id: "01",
    title: "UI/UX Design & Prototyping",
    description:
      "Crafting intuitive digital experiences that engage and convert through strategic research and high-fidelity prototyping.",
    features: [
      "USER RESEARCH & PERSONAS",
      "INTERACTIVE PROTOTYPING",
      "VISUAL DESIGN SYSTEMS",
      "USABILITY TESTING",
    ],
    image:
      "https://images.unsplash.com/photo-1581291417007-a3e535ce0ed8?auto=format&fit=crop&q=80&w=1200&h=1600",
  },
  {
    id: "02",
    title: "Full-Stack Development",
    description:
      "Building robust, scalable web applications with modern tech stacks like Next.js, TypeScript, and cloud-native architectures.",
    features: [
      "REACT & NEXT.JS EXPERTISE",
      "BACKEND ARCHITECTURE",
      "API DESIGN & INTEGRATION",
      "DATABASE MANAGEMENT",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200&h=1600",
  },
  {
    id: "03",
    title: "Performance Optimization",
    description:
      "Ensuring your digital products are lightning fast, SEO friendly, and provide a flawless experience across all devices.",
    features: [
      "CORE WEB VITALS AUDIT",
      "CODE SPLITTING & LAZY LOADING",
      "SERVER-SIDE RENDERING",
      "IMAGE OPTIMIZATION",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=1600",
  },
  {
    id: "04",
    title: "Brand Identity & Strategy",
    description:
      "Defining your digital presence through strategic design, cohesive brand voice, and impactful visual storytelling.",
    features: [
      "LOGO & VISUAL IDENTITY",
      "BRAND VOICE & MESSAGING",
      "DIGITAL STRATEGY",
      "CONTENT ARCHITECTURE",
    ],
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200&h=1600",
  },
];

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="bg-[#010004] py-32 relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-20 items-stretch relative">
          {/* Left Side: Sticky Content */}
          <div className="w-full md:w-[40%] relative min-h-full">
            <motion.div style={{ y }} className="md:sticky md:top-40 h-fit">
              <div className="mb-8">
                <SectionHeading>SERVICES</SectionHeading>
              </div>
              <h2 className="text-4xl md:text-[55px] font-light tracking-tighter leading-[0.9] text-white mb-8">
                Built to Simplify
                <br />
                Complexity
              </h2>
              <p className="text-white/40  max-w-sm">
                We design and develop high-performance digital solutions that
                blend clarity, precision, and seamless user experience.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Scrollable Cards */}
          <div className="w-full md:w-[75%] space-y-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
  index: number;
  key?: any;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // For the card slide-in from right
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.98, 1]);

  // For the image animation inside the card
  const { ref: imageInViewRef, inView: imageInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, x, scale }}
      className="bg-[#1a1a1d] border border-white/5 rounded-lg overflow-hidden flex flex-col md:flex-row items-stretch min-h-[350px] md:max-h-[352px] "
    >
      {/* Left: Image Half - Now taking full half */}
      <div
        ref={imageInViewRef}
        className="w-full md:w-1/2 relative overflow-hidden grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700 h-[250px] md:h-auto"
      >
        <motion.img
          initial={{ scale: 0.8, opacity: 0.75 }}
          animate={{
            scale: imageInView ? 1 : 0.8,
            opacity: imageInView ? 1 : 0.75,
          }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Right: Content Half */}
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="text-white/30 text-[10px] font-mono tracking-[0.2em] uppercase">
            / {service.id}
          </div>
          <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight leading-tight">
            {service.title}
          </h3>
          <p className="text-white/40 font-light leading-relaxed text-sm md:text-base max-w-md">
            {service.description}
          </p>
        </div>

        <div className="space-y-3 mt-6">
          {service.features.map((feature, i) => (
            <div key={i} className="group">
              <div className="text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-white/20 uppercase group-hover:text-white/50 transition-colors">
                {feature}
              </div>
              {i !== service.features.length - 1 && (
                <div className="w-full h-px bg-white/5 mt-3" />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
