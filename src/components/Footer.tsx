"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#010004] pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 mb-24">
          {/* Left Column: Brand & GIF */}
          <div className="space-y-12">
            <div className="space-y-8">
              <Link
                href="/"
                className="flex items-center gap-3 group cursor-pointer"
              >
                <img
                  src="/logo.png"
                  alt="xyspire logo"
                  className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </Link>

              <h2 className="text-5xl font-light tracking-tighter leading-tight text-white max-w-xs">
                Clear. Precise.
                <br />
                Automated.
              </h2>
            </div>

            <div className="relative w-64 aspect-square">
              <img
                src="/footer.gif"
                alt="Animated brand element"
                className="w-full h-full object-contain brightness-125"
              />
            </div>
          </div>

          {/* Middle Column: Navigation */}
          <div className="space-y-8">
            <div className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
              Navigation
            </div>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Projects", href: "/" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "#" },
                { name: "Terms and Condition", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-lg text-white/60 hover:text-white transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Socials, Contact & Newsletter */}
          <div className="space-y-16">
            {/* Socials */}
            <div className="space-y-8">
              <div className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
                Socials
              </div>
              <div className="flex gap-4">
                {[
                  { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
                  { icon: <Twitter className="w-5 h-5" />, label: "X" },
                  {
                    icon: <Instagram className="w-5 h-5" />,
                    label: "Instagram",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
                  Email
                </div>
                <a
                  href="mailto:support@xyspire.com"
                  className="text-2xl font-light text-white hover:text-white/80 transition-colors block"
                >
                  support@xyspire.com
                </a>
              </div>

              <div className="space-y-4">
                <div className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
                  Phone
                </div>
                <a
                  href="tel:+12345678"
                  className="text-xl font-light text-white hover:text-white/80 transition-colors block"
                >
                  +91 12345678
                </a>
              </div>
            </div>

            {/* Newsletter */}
            {/* <div className="space-y-6">
              <div className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
                Subscribe to our newsletter
              </div>
              <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl focus-within:border-white/20 transition-all">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent border-none outline-none px-4 py-2 text-white text-sm flex-1 placeholder:text-white/20"
                />
                <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-bold hover:bg-white/90 transition-colors">
                  Submit
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
            © {currentYear} XYSPIRE. ALL RIGHTS RESERVED.
          </div>
          <div className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase flex items-center gap-2">
            MADE BY <span className="text-white/40">XYSPIRE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
