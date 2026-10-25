"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { ArrowRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 bg-white/95 backdrop-blur-md border-b ${
        isScrolled ? "border-[#EDEFF1] shadow-xs" : "border-[#EDEFF1]/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Left: ReddSocial Logo */}
        <a
          href="/"
          className="group focus-visible:ring-2 focus-visible:ring-[#FF4500] focus-visible:outline-none rounded-lg p-1 -ml-1 transition-opacity hover:opacity-90"
          aria-label="ReddSocial Home"
        >
          <Logo size="md" />
        </a>

        {/* Right: Status Indicator & Launch Updates CTA */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Status Badge (visible on tablets & desktops) */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6F7F8] border border-[#EDEFF1] text-xs font-semibold tracking-wider uppercase text-[#576F76]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4500] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4500]"></span>
            </span>
            <span>Coming Soon</span>
          </div>

          {/* Primary Action Button */}
          <a
            href="#signup"
            onClick={(e) => scrollToSection(e, "signup")}
            className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-[#FF4500] text-white text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 hover:bg-[#E03D00] hover:shadow-sm active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF4500] shrink-0"
          >
            <span className="hidden sm:inline">Get Launch Updates</span>
            <span className="sm:hidden">Get Updates</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline-block" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
