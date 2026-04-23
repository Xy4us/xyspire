"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ChevronDown, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#010004]">
      {/* Background Image with Fade */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/why_us.jpeg" 
          alt="Contact Background" 
          className="w-full h-full object-cover scale-110 opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#010004] via-[#010004]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010004] via-transparent to-[#010004]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex">
                <SectionHeading>CONTACT US</SectionHeading>
              </div>
              <h1 className="text-5xl md:text-[80px] font-light tracking-tighter leading-[0.9] text-white">
                Let's talk about<br />your workflow
              </h1>
              <p className="text-white/50 text-lg md:text-xl font-light max-w-lg leading-relaxed">
                Share a few details about your business and what you’re looking to automate. Our team will review your message and get back to you shortly.
              </p>
            </div>

            {/* Clarissa Card */}
            <div className="inline-flex items-center gap-6 p-6 rounded-[32px] bg-[#1a1a1d] border border-white/10 backdrop-blur-sm">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="https://picsum.photos/seed/clarissa/200/200" 
                  alt="Clarissa" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <h4 className="text-white font-medium tracking-tight">Talk with Clarissa</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Director of Sanjaya</p>
                </div>
                <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl text-xs font-bold hover:bg-white/90 transition-all group">
                  Book 15-mins call
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="bg-[#1a1a1d]/80 border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-xl shadow-2xl"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                {/* Full Name */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter full name"
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter email address"
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase ml-1">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter company name"
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>

                {/* Budget */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase ml-1">Budget</label>
                  <div className="relative">
                    <select className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white/20 appearance-none focus:outline-none focus:border-white/20 transition-colors">
                      <option>Select budget range</option>
                      <option>$1k - $5k</option>
                      <option>$5k - $10k</option>
                      <option>$10k+</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase ml-1">Message</label>
                  <textarea 
                    placeholder="Let us know what we can help..."
                    rows={4}
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                <p className="text-[11px] text-white/30 leading-relaxed max-w-[240px]">
                  By submitting you agree to our <a href="#" className="text-white/60 hover:text-white transition-colors underline underline-offset-4">Terms of Service</a> and <a href="#" className="text-white/60 hover:text-white transition-colors underline underline-offset-4">Privacy Policy</a>
                </p>
                <button className="w-full md:w-auto bg-white text-black px-12 py-4 rounded-2xl font-bold text-sm hover:bg-white/90 transition-all shadow-xl shadow-white/5">
                  Submit
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
