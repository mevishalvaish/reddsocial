"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X, ArrowRight, DollarSign, Briefcase } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Services", href: "#services", id: "services" },
    { label: "How It Works", href: "#how-it-works", id: "how-it-works" },
    { label: "Earn With Us", href: "#earn", id: "earn" },
    { label: "Why Us", href: "#why", id: "why" },
    { label: "FAQ", href: "#faq", id: "faq" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0B0F]/90 backdrop-blur-xl border-b border-[#22222E] shadow-2xl py-3"
          : "bg-transparent border-b border-white/5 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="group focus-visible:ring-2 focus-visible:ring-[#FF4500] focus-visible:outline-none rounded-lg p-1 -ml-1 transition-opacity hover:opacity-90"
          aria-label="Convolift Home"
        >
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className="hover:text-white transition-colors duration-200 relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#FF4500] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Dual Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Outlined Earn Money Button */}
          <a
            href="#earn"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("earn");
            }}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#2E2E3E] hover:border-[#FF4500]/60 bg-[#14141A] hover:bg-[#1E1E28] text-gray-200 hover:text-white text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 active:scale-95"
          >
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            <span>Earn Money</span>
          </a>

          {/* Primary Filled Hire Convolift Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#FF4500] hover:bg-[#E03D00] text-white text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 shadow-md shadow-[#FF4500]/25 hover:shadow-lg hover:shadow-[#FF4500]/35 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF4500]"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Hire Convolift</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:hidden shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="px-3 py-1.5 rounded-lg bg-[#FF4500] text-white text-xs font-semibold"
          >
            Hire
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#14141A] border border-[#22222E] text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0F]/95 backdrop-blur-2xl border-b border-[#22222E] px-4 pt-4 pb-6 mt-2 animate-fade-in shadow-2xl">
          <nav className="flex flex-col space-y-3 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className="text-base font-medium text-gray-200 hover:text-white px-2 py-1.5 rounded-lg hover:bg-[#14141A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#22222E]">
            <a
              href="#earn"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("earn");
              }}
              className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-[#2E2E3E] bg-[#14141A] text-sm font-semibold text-gray-200 text-center"
            >
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <span>Earn Money</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-[#FF4500] text-sm font-semibold text-white text-center shadow-lg shadow-[#FF4500]/25"
            >
              <Briefcase className="w-4 h-4" />
              <span>Hire Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
