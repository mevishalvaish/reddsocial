"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Briefcase,
  DollarSign,
  ShieldCheck,
  ArrowBigUp,
  MessageSquare,
  CornerDownRight,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { heroConfig } from "@/lib/contentConfig";

export function Hero() {
  const [brandIndex, setBrandIndex] = useState(0);
  const [earnerIndex, setEarnerIndex] = useState(0);

  useEffect(() => {
    const brandTimer = setInterval(() => {
      setBrandIndex((prev) => (prev + 1) % heroConfig.brandSlidingWords.length);
    }, 2000);

    const earnerTimer = setInterval(() => {
      setEarnerIndex((prev) => (prev + 1) % heroConfig.earnerSlidingWords.length);
    }, 2000);

    return () => {
      clearInterval(brandTimer);
      clearInterval(earnerTimer);
    };
  }, []);

  const scrollToContact = (tab: "brand" | "earner") => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Dispatch custom event to select corresponding contact tab
      window.dispatchEvent(new CustomEvent("switch-contact-tab", { detail: tab }));
    }
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32 bg-[#0B0B0F]">
      {/* Background radial orange gradient glow */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#FF4500]/15 via-[#FF4500]/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Sliding Words & Dual Selectors */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141A] border border-[#22222E] text-gray-200 text-xs font-semibold tracking-wider uppercase mb-6 w-fit shadow-lg shadow-black/40">
              <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
              <span>{heroConfig.badge}</span>
            </div>

            {/* Main Headline with Sliding Words */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.18] mb-6">
              <span className="block sm:inline">Get your brand </span>
              <span className="inline-block relative overflow-hidden align-baseline min-w-[160px] sm:min-w-[320px] lg:min-w-[370px] h-[1.18em]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={heroConfig.brandSlidingWords[brandIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[#FF4500] inline-block absolute left-0"
                  >
                    {heroConfig.brandSlidingWords[brandIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="block sm:inline"> on Reddit</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl mb-4">
              {heroConfig.subheading}
            </p>

            {/* Second Smaller Line with Sliding Words for Earners */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-gray-400 font-medium mb-8">
              <span>{heroConfig.earnerLinePrefix}</span>
              <span className="inline-block relative overflow-hidden align-baseline min-w-[75px] sm:min-w-[95px] h-[1.25em]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={heroConfig.earnerSlidingWords[earnerIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[#FF4500] font-bold inline-block absolute left-0"
                  >
                    {heroConfig.earnerSlidingWords[earnerIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>

            {/* Two-Card Audience Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Card 1: For Brands */}
              <div className="bg-[#14141A] rounded-2xl border border-[#22222E] p-5 hover:border-[#FF4500]/50 hover:bg-[#181822] transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#FF4500]/10 border border-[#FF4500]/20 flex items-center justify-center text-[#FF4500] mb-3">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <h2 className="text-base font-bold text-white mb-1.5 group-hover:text-[#FF4500] transition-colors">
                    {heroConfig.brandCard.title}
                  </h2>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {heroConfig.brandCard.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToContact("brand")}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FF4500] hover:bg-[#E03D00] text-white text-xs font-bold transition-all shadow-md shadow-[#FF4500]/20 active:scale-95"
                >
                  <span>{heroConfig.brandCard.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Card 2: For Earners */}
              <div className="bg-[#14141A] rounded-2xl border border-[#22222E] p-5 hover:border-emerald-500/50 hover:bg-[#181822] transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <h2 className="text-base font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors">
                    {heroConfig.earnerCard.title}
                  </h2>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {heroConfig.earnerCard.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToContact("earner")}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500 hover:text-black text-emerald-300 text-xs font-bold transition-all active:scale-95"
                >
                  <span>{heroConfig.earnerCard.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Trust Line */}
            <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
              <ShieldCheck className="w-4 h-4 text-[#FF4500]" />
              <span>{heroConfig.trustLine}</span>
            </div>
          </div>

          {/* Right Column: Stylized Mock Reddit Thread Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative animate-float-1">
              {/* Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#FF4500]/20 via-transparent to-purple-500/10 rounded-3xl blur-xl opacity-75 pointer-events-none" />

              {/* Main Thread Card */}
              <div className="relative bg-[#14141A] rounded-2xl border border-[#22222E] p-5 sm:p-6 shadow-2xl">
                {/* Thread Header */}
                <div className="flex items-center justify-between gap-2 pb-3.5 mb-3.5 border-b border-[#22222E]">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs min-w-0">
                    <span className="w-5 h-5 rounded-md bg-[#FF4500] text-white flex items-center justify-center font-black text-[10px] shrink-0">
                      r/
                    </span>
                    <span className="font-bold text-white shrink-0">SaaS</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 truncate text-[11px] sm:text-xs">u/GrowthLeader</span>
                    <span className="text-gray-500 hidden sm:inline">•</span>
                    <span className="text-gray-400 hidden sm:inline text-xs">4h ago</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#FF4500] bg-[#FF4500]/10 border border-[#FF4500]/20 px-2 py-0.5 rounded-full shrink-0">
                    Discussion
                  </span>
                </div>

                {/* Thread Content */}
                <div className="flex items-start gap-3.5 mb-4">
                  {/* Upvote Pill */}
                  <div className="flex flex-col items-center bg-[#1A1A24] border border-[#2E2E3E] rounded-lg px-2 py-1 text-gray-300 shrink-0">
                    <ArrowBigUp className="w-4 h-4 text-[#FF4500]" />
                    <span className="text-xs font-bold leading-none mt-0.5">142</span>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      &ldquo;What tools or workflows are you using to scale B2B word-of-mouth without sounding spammy?&rdquo;
                    </h3>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                      <span className="inline-flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" />
                        58 comments
                      </span>
                      <span>•</span>
                      <span className="text-emerald-400 font-semibold">High Intent</span>
                    </div>
                  </div>
                </div>

                {/* Top Recommended Comment */}
                <div className="bg-[#1A1A24] rounded-xl border border-[#2E2E3E] p-3.5 mb-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <CornerDownRight className="w-3.5 h-3.5 text-[#FF4500]" />
                      <span className="text-xs font-bold text-gray-200">u/AgedMember (12.4k karma)</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" />
                      Helpful
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed pl-5 border-l border-[#FF4500]/40">
                    &ldquo;We used Convolift for organic Reddit discussions. They placed thoughtful comments where founders were already asking for alternatives — drove real signups and zero flags.&rdquo;
                  </p>
                  <div className="mt-2 pl-5 flex items-center gap-3 text-[11px] text-gray-400 font-medium">
                    <span className="flex items-center gap-1 text-[#FF4500]">
                      <ArrowBigUp className="w-3.5 h-3.5" /> 39 upvotes
                    </span>
                    <span>•</span>
                    <span>3h ago</span>
                  </div>
                </div>

                {/* Nested Reply */}
                <div className="ml-5 bg-[#14141A] rounded-xl border border-[#282838] p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-gray-300">u/TechFounder</span>
                    <span className="text-[10px] text-gray-500">• 2h ago</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    &ldquo;Can confirm, seen them mentioned naturally in r/startups. Way better than generic ads.&rdquo;
                  </p>
                </div>

                {/* Bottom Trust Badge */}
                <div className="mt-4 pt-3 border-t border-[#22222E] flex items-center justify-between gap-2 text-xs text-gray-400">
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold text-[11px] sm:text-xs truncate">
                    <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                    <span>Ranked in Discussions</span>
                  </span>
                  <span className="text-gray-500 text-[10px] sm:text-[11px] shrink-0">Real Accounts</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
