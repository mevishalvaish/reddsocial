"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Send,
  MessageCircle,
} from "lucide-react";
import { siteConfig, heroConfig } from "@/lib/contentConfig";

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-[#07060d]">
      
      {/* ========================================================
          BACKGROUND: MODERN ATMOSPHERIC MESH & RADAR HORIZON
          ======================================================== */}
      {/* Top Ambient Reddit Orange Core Aura */}
      <div 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[520px] bg-gradient-to-b from-[#FF4500]/25 via-[#FF4500]/8 to-transparent rounded-full blur-[130px]"
        aria-hidden="true"
      />

      {/* Dual Subtle Ambient Accent Flares */}
      <div 
        className="pointer-events-none absolute top-1/3 -left-32 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px]"
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute top-1/3 -right-32 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[130px]"
        aria-hidden="true"
      />

      {/* Modern High-Tech Concentric Geometric Radar Waves */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden="true">
        <div className="relative w-[850px] sm:w-[1100px] aspect-square flex items-center justify-center opacity-40">
          {/* Ring 1 */}
          <div className="absolute inset-[35%] rounded-full border border-[#FF4500]/30 animate-pulse" />
          {/* Ring 2 with orbiting orange particle */}
          <div className="absolute inset-[25%] rounded-full border border-white/10 animate-orbit" style={{ animationDuration: "35s" }}>
            <span className="absolute top-0 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4500] shadow-[0_0_12px_3px_rgba(255,69,0,0.9)]" />
          </div>
          {/* Ring 3 with orbiting teal particle */}
          <div className="absolute inset-[15%] rounded-full border border-white/[0.08] animate-orbit-rev" style={{ animationDuration: "42s" }}>
            <span className="absolute bottom-[20%] left-0 size-2 -translate-x-1/2 rounded-full bg-[#5eead4] shadow-[0_0_12px_2px_rgba(94,234,212,0.9)]" />
          </div>
          {/* Ring 4 outer boundary */}
          <div className="absolute inset-[5%] rounded-full border border-white/[0.05]" />
          {/* Ring 5 outermost */}
          <div className="absolute inset-[-5%] rounded-full border border-white/[0.03]" />
        </div>
      </div>

      {/* Cyber Grid Horizon Texture with Radial Mask */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_40%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Soft Vignette Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_20%,#07060d_90%)]"
        aria-hidden="true"
      />

      {/* ========================================================
          FOREGROUND CONTENT: CENTERED MODERN SAAS COMPOSITION
          ======================================================== */}
      <div className="relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-between">
        
        {/* Top/Hero Main Stage */}
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 pt-10 sm:pt-14 md:pt-18 text-center">
          
          {/* Top Monospaced Meta Eyebrow */}
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.25em] text-white/70 uppercase mb-3 max-w-full px-2 truncate">
            {heroConfig.metaEyebrow}
          </p>

          {/* Clean Modern Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141E]/90 border border-[#262638] text-gray-200 text-xs font-semibold tracking-wider uppercase mb-5 shadow-xl backdrop-blur-md hover:border-[#FF4500]/40 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4500] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4500]" />
            </span>
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent font-bold">
              {heroConfig.badge}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#FF4500]" />
          </div>

          {/* Massive Centered Headline with Dedicated Sliding Word Row */}
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
              <span className="block text-white/95">Get your brand</span>
              
              {/* Centered Sliding Word in Luminous Reddit Orange Gradient */}
              <span className="block relative h-[1.3em] w-full min-w-[260px] sm:min-w-[420px] overflow-hidden my-0.5 sm:my-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={heroConfig.brandSlidingWords[brandIndex]}
                    initial={{ y: 28, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -28, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#FF4500] via-[#FF6A00] to-[#FFA000] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,69,0,0.5)] whitespace-nowrap"
                  >
                    {heroConfig.brandSlidingWords[brandIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>

              <span className="block text-white/95">on Reddit.</span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-base md:text-lg leading-relaxed text-white/75 font-normal px-2">
            {heroConfig.subheading}
          </p>

          {/* Second Smaller Line with Sliding Words for Reddit Users */}
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 font-medium mt-3.5 backdrop-blur-sm">
            <span className="text-gray-400">{heroConfig.earnerLinePrefix}</span>
            <span className="inline-block relative overflow-hidden align-baseline min-w-[65px] sm:min-w-[85px] h-[1.25em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={heroConfig.earnerSlidingWords[earnerIndex]}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-emerald-400 font-bold inline-block absolute left-0"
                >
                  {heroConfig.earnerSlidingWords[earnerIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="text-[10px] uppercase font-bold text-emerald-400/90 bg-emerald-500/10 px-1.5 sm:px-2 py-0.5 rounded-md ml-0.5 sm:ml-1 border border-emerald-500/20">
              Paid Tasks
            </span>
          </div>

          {/* Horizontal Capability Badges Row */}
          <ul className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mt-5 px-1">
            {heroConfig.capabilities.map((item, idx) => (
              <li key={idx}>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-[#0c0a12]/90 backdrop-blur-sm px-2.5 sm:px-3.5 py-1 sm:py-1.5 hover:border-white/35 transition-colors cursor-default shadow-sm">
                  <span
                    className="size-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.14em] text-white font-semibold">
                    {item.tag}
                  </span>
                  <span className="text-[11px] sm:text-xs text-white/55">
                    {item.label}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Action CTAs (Direct Messaging on WhatsApp, Telegram, Discord) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8">
            {/* Primary Action Button: WhatsApp Direct Chat */}
            <a
              href={siteConfig.whatsappBrandUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-gray-100 text-black text-sm font-semibold transition-all shadow-xl hover:shadow-white/20 active:scale-95 group"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]/20" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary Action Button: Telegram / Discord */}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/15 hover:border-white/35 bg-white/5 hover:bg-white/10 text-white text-sm font-medium backdrop-blur-sm transition-all active:scale-95"
            >
              <Send className="w-3.5 h-3.5 text-[#0088cc]" />
              <span>Telegram &amp; Discord</span>
            </button>

            {/* Quick Reddit User Route */}
            <button
              onClick={() => scrollToSection("earn")}
              className="text-xs text-white/60 hover:text-white transition-colors underline-offset-4 hover:underline py-1 px-2"
            >
              Looking to earn? Apply with profile →
            </button>
          </div>

        </div>

        {/* ========================================================
            BOTTOM STAGE: 3 FLOATING GLASS CARDS + SUBREDDIT MARQUEE
            ======================================================== */}
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 pt-12 pb-4">
          
          {/* 3 Floating Glass Signal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8">
            {heroConfig.signalCards.map((card, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-white/15 bg-[#0c0a14]/85 backdrop-blur-md p-4 sm:p-5 text-left transition-all duration-300 hover:border-white/30 hover:bg-[#100f1c]/95 hover:shadow-2xl hover:shadow-black/60 overflow-hidden"
              >
                {/* Subtle top edge glow */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF4500]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <p className="font-mono text-[11px] tracking-[0.16em] text-white/70 uppercase font-semibold">
                  {card.eyebrow}
                </p>
                <h3 className="mt-1 text-sm font-bold text-white group-hover:text-[#FF4500] transition-colors">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs text-white/70 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Marquee Ticker of Popular Subreddits */}
          <div className="border-y border-white/15 py-3.5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {/* Loop 1 */}
              {heroConfig.popularSubreddits.map((sub, idx) => (
                <span
                  key={`sub1-${idx}`}
                  className="flex items-center gap-3 px-4 text-xs sm:text-sm font-medium whitespace-nowrap text-white/80"
                >
                  <span
                    className="size-1.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: idx % 3 === 0 ? "#FF4500" : idx % 3 === 1 ? "#5eead4" : "#9b87ff",
                    }}
                  />
                  <span>{sub}</span>
                </span>
              ))}
              {/* Loop 2 (for seamless infinite marquee) */}
              {heroConfig.popularSubreddits.map((sub, idx) => (
                <span
                  key={`sub2-${idx}`}
                  className="flex items-center gap-3 px-4 text-xs sm:text-sm font-medium whitespace-nowrap text-white/80"
                >
                  <span
                    className="size-1.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: idx % 3 === 0 ? "#FF4500" : idx % 3 === 1 ? "#5eead4" : "#9b87ff",
                    }}
                  />
                  <span>{sub}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
