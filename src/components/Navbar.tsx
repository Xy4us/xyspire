"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import { AnimatedNavLink } from "./AnimatedNavLink";
import { X } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    setScrolled(latest > 50);

    if (latest > previous && latest > 150 && !isMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Top blur bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hidden && scrolled ? 1 : 0 }}
        className="fixed top-0 left-0 w-full h-2 z-[49] backdrop-blur-xl bg-white/5"
      />

      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 border-b border-white/5 transition-colors duration-300 ${
          scrolled || isMenuOpen
            ? "backdrop-blur-md bg-[#010004]/60"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 md:px-8 md:py-3 max-w-7xl mx-auto w-full">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="xyspire"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm text-white">
            {menuLinks.map((item) => (
              <AnimatedNavLink key={item.name} href={item.href}>
                {item.name}
              </AnimatedNavLink>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-white/5 hover:bg-white/10 backdrop-blur-md text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all border border-white/10 shadow-lg">
              Get Free Consultation
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden w-11 h-11 border border-white/20 rounded-lg flex flex-col items-center justify-center gap-1.5 backdrop-blur-md transition-all hover:bg-white/5 active:scale-95"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white/90" />
              ) : (
                <>
                  <div className="w-6 h-[1px] bg-white/80" />
                  <div className="w-6 h-[1px] bg-white/80" />
                  <div className="w-6 h-[1px] bg-white/80" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full px-6 py-4 md:hidden"
            >
              <div className="bg-[#0f0f0f] border border-white/10 rounded-[24px] p-8 shadow-2xl space-y-8">
                <div className="flex flex-col gap-6">
                  {menuLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-medium text-white/90 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <button className="w-full bg-white text-black py-4 rounded-xl font-bold text-base hover:bg-white/90 transition-colors">
                  Get Free Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
