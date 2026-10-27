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
  Flame,
  Check,
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
      window.dispatchEvent(new CustomEvent("switch-contact-tab", { detail: tab }));
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 bg-[#0B0B0F]">
      {/* Background Ambience: Subtle Grid & Dual Mesh Radial Glows */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#2222330a_1px,transparent_1px),linear-gradient(to_bottom,#2222330a_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" 
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] sm:w-[900px] h-[480px] bg-gradient-to-b from-[#FF4500]/20 via-[#FF4500]/5 to-transparent rounded-full blur-[110px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-24 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Eyebrow, Main Sliding Headline, Subheading & Dual Audience Selectors */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Ultra-Modern Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#14141E]/90 border border-[#262638] text-gray-200 text-xs font-semibold tracking-wider uppercase mb-6 w-fit shadow-xl backdrop-blur-md hover:border-[#FF4500]/40 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4500] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4500]" />
              </span>
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent font-bold">
                {heroConfig.badge}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#FF4500]" />
            </div>

            {/* Main Headline with Dedicated Line for Sliding Words */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-6">
              <span>Get your brand</span>
              <span className="block relative overflow-hidden h-[1.2em] my-0.5">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={heroConfig.brandSlidingWords[brandIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-gradient-to-r from-[#FF4500] via-[#FF5722] to-[#FFA000] bg-clip-text text-transparent inline-block absolute left-0 drop-shadow-[0_2px_18px_rgba(255,69,0,0.35)] whitespace-nowrap"
                  >
                    {heroConfig.brandSlidingWords[brandIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span>on Reddit</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl mb-5">
              {heroConfig.subheading}
            </p>

            {/* Second Smaller Line with Sliding Words for Earners */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#14141D] border border-[#222230] text-xs sm:text-sm text-gray-300 font-medium mb-8 w-fit">
              <span className="text-gray-400">{heroConfig.earnerLinePrefix}</span>
              <span className="inline-block relative overflow-hidden align-baseline min-w-[70px] sm:min-w-[85px] h-[1.25em]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={heroConfig.earnerSlidingWords[earnerIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-emerald-400 font-bold inline-block absolute left-0"
                  >
                    {heroConfig.earnerSlidingWords[earnerIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="text-[10px] uppercase font-bold text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded-md ml-1 border border-emerald-500/20">
                Paid Tasks
              </span>
            </div>

            {/* Modern Two-Card Audience Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              
              {/* Card 1: For Brands */}
              <div 
                onClick={() => scrollToContact("brand")}
                className="group relative bg-[#13131A] hover:bg-[#181822] rounded-2xl border border-[#222230] hover:border-[#FF4500]/60 p-5 sm:p-6 transition-all duration-300 cursor-pointer shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top border glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF4500] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FF4500]/10 border border-[#FF4500]/25 flex items-center justify-center text-[#FF4500] group-hover:scale-105 group-hover:bg-[#FF4500] group-hover:text-white transition-all">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#FF4500] bg-[#FF4500]/10 border border-[#FF4500]/20 px-2.5 py-0.5 rounded-full">
                      For Brands
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-[#FF4500] transition-colors">
                    {heroConfig.brandCard.title}
                  </h2>
                  <p className="text-xs text-gray-400 leading-relaxed mb-5">
                    {heroConfig.brandCard.description}
                  </p>
                </div>

                <div className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF4500] hover:bg-[#E03D00] text-white text-xs font-bold transition-all shadow-lg shadow-[#FF4500]/25 group-hover:shadow-[#FF4500]/40">
                  <span>{heroConfig.brandCard.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Card 2: For Earners */}
              <div 
                onClick={() => scrollToContact("earner")}
                className="group relative bg-[#13131A] hover:bg-[#181822] rounded-2xl border border-[#222230] hover:border-emerald-500/60 p-5 sm:p-6 transition-all duration-300 cursor-pointer shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top border glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      For Workers
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors">
                    {heroConfig.earnerCard.title}
                  </h2>
                  <p className="text-xs text-gray-400 leading-relaxed mb-5">
                    {heroConfig.earnerCard.description}
                  </p>
                </div>

                <div className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 group-hover:bg-emerald-500 group-hover:text-black text-emerald-300 text-xs font-bold transition-all shadow-lg shadow-emerald-500/10">
                  <span>{heroConfig.earnerCard.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>

            {/* Trust Badges Line */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-gray-400">
              <div className="flex items-center gap-1.5 text-gray-300">
                <Check className="w-3.5 h-3.5 text-[#FF4500]" />
                <span>Real aged accounts</span>
              </div>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-gray-300">
                <Check className="w-3.5 h-3.5 text-[#FF4500]" />
                <span>Relevant subreddits</span>
              </div>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-gray-300">
                <Check className="w-3.5 h-3.5 text-[#FF4500]" />
                <span>Zero bot spam</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Mock Reddit Thread Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative animate-float-1">
              
              {/* Backlight Ambient Glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#FF4500]/25 via-transparent to-purple-600/15 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

              {/* Main Card Container */}
              <div className="relative bg-[#14141D] rounded-2xl border border-[#262638] p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Subreddit Header Bar */}
                <div className="flex items-center justify-between gap-2 pb-3.5 mb-3.5 border-b border-[#242436]">
                  <div className="flex items-center gap-2 text-xs min-w-0">
                    <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#FF4500] to-[#E03D00] text-white flex items-center justify-center font-black text-[11px] shadow-md shadow-[#FF4500]/30 shrink-0">
                      r/
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-extrabold text-white text-xs leading-none">r/SaaS</span>
                      <span className="text-[10px] text-gray-400 truncate mt-0.5">Posted by u/GrowthLeader • 4h ago</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#FF4500] bg-[#FF4500]/10 border border-[#FF4500]/25 px-2.5 py-0.5 rounded-full shrink-0 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-[#FF4500]" />
                    Trending
                  </span>
                </div>

                {/* Main Post Headline & Score */}
                <div className="flex items-start gap-3.5 mb-4">
                  {/* Upvote Pill */}
                  <div className="flex flex-col items-center bg-[#1A1A26] border border-[#2A2A3E] rounded-xl px-2.5 py-1.5 text-gray-200 shrink-0 shadow-inner">
                    <ArrowBigUp className="w-4 h-4 text-[#FF4500] fill-[#FF4500]/20" />
                    <span className="text-xs font-black leading-none mt-1">142</span>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      &ldquo;What workflows or tools are you using to scale B2B word-of-mouth without sounding spammy?&rdquo;
                    </h3>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                      <span className="inline-flex items-center gap-1">
                        <MessageSquare className="w-3 h-3 text-gray-400" />
                        58 comments
                      </span>
                      <span>•</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        High-Intent Query
                      </span>
                    </div>
                  </div>
                </div>

                {/* Top Helpful Placement Comment */}
                <div className="bg-[#1A1A28] rounded-xl border border-[#2B2B40] p-3.5 mb-3 shadow-md">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <CornerDownRight className="w-3.5 h-3.5 text-[#FF4500] shrink-0" />
                      <span className="text-xs font-bold text-gray-200 truncate">u/AgedMember</span>
                      <span className="text-[10px] text-gray-400 hidden sm:inline">(12.4k karma)</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 shrink-0">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified Earner
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed pl-5 border-l-2 border-[#FF4500]/50 my-2">
                    &ldquo;We used <strong className="text-white font-semibold">Convolift</strong> for organic Reddit community discussions. They placed thoughtful, in-depth responses directly where founders were actively searching for solutions — brought high-intent trials with zero moderation flags.&rdquo;
                  </p>
                  <div className="pl-5 flex items-center gap-3 text-[11px] text-gray-400 font-medium">
                    <span className="flex items-center gap-1 text-[#FF4500] font-bold">
                      <ArrowBigUp className="w-3.5 h-3.5 fill-[#FF4500]/20" /> 39 upvotes
                    </span>
                    <span>•</span>
                    <span>3h ago</span>
                  </div>
                </div>

                {/* Secondary Nested Reply */}
                <div className="ml-5 bg-[#161622] rounded-xl border border-[#28283C] p-3">
                  <div className="flex items-center gap-2 mb-1 text-xs">
                    <span className="font-semibold text-gray-200">u/TechFounder</span>
                    <span className="text-[10px] text-gray-500">• 2h ago</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    &ldquo;Second this. Saw them mentioned naturally in r/startups. Reads 10x better than generic sponsored ads.&rdquo;
                  </p>
                </div>

                {/* Bottom Live Signals Row */}
                <div className="mt-4 pt-3 border-t border-[#242436] flex items-center justify-between gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px] sm:text-xs">
                    <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                    <span>Ranked in Top Discussions</span>
                  </span>
                  <span className="text-gray-400 text-[10px] sm:text-[11px] font-medium bg-[#1A1A26] px-2 py-0.5 rounded-md border border-[#28283A]">
                    100% Genuine Accounts
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
