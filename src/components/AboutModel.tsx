import { SectionHeading } from "./SectionHeading";
import { Check } from "lucide-react";

export const AboutModel = () => {
  return (
    <section className="py-32 bg-[#010004]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative aspect-square rounded-[40px] overflow-hidden border border-white/10 group">
            <img 
              src="https://picsum.photos/seed/hvac-repair/1000/1000" 
              alt="HVAC Professional" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010004] via-transparent to-transparent opacity-60" />
          </div>
          <div className="order-1 lg:order-2 space-y-12">
            <div className="space-y-6">
              <div className="flex">
                <SectionHeading>THE MODEL</SectionHeading>
              </div>
              <h2 className="text-4xl md:text-7xl font-light tracking-tighter leading-[0.9] text-white">
                Simple, Affordable,<br /><span className="text-white/40">Effective.</span>
              </h2>
              <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed">
                We’ve kept our model simple so you can focus on running your business. Everything is handled for you — from setup to updates.
              </p>
            </div>
            
            <div className="grid gap-4">
              {[
                "No large upfront costs",
                "Small, predictable monthly fee",
                "Ongoing support and maintenance included"
              ].map((text) => (
                <div key={text} className="flex items-center gap-6 p-8 rounded-3xl bg-[#1a1a1d] border border-white/10 transition-colors hover:border-white/20 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                    <Check className="w-6 h-6" />
                  </div>
                  <span className="text-white text-xl font-light tracking-tight">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
