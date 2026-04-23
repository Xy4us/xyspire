import { SectionHeading } from "./SectionHeading";

export const AboutApproach = () => {
  return (
    <section className="py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <div className="flex">
              <SectionHeading>OUR APPROACH</SectionHeading>
            </div>
            <h2 className="text-4xl md:text-7xl font-light tracking-tighter leading-[0.9] text-white">
              We focus on what<br />matters most — <span className="text-white/40">results.</span>
            </h2>
            <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Every website we create is designed to make your business look professional and trustworthy, help customers find you easily on Google, and encourage visitors to call, message, or book instantly.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-light tracking-wide">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                No unnecessary complexity. No fluff.
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 group">
            <img 
              src="https://picsum.photos/seed/plumber-working/1200/1500" 
              alt="Professional at work" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010004] via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};
