"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Star,
  Send,
  MessageCircle,
  ExternalLink,
  Users,
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
          BACKGROUND: COSMIC GLOBE + ORBITAL RINGS (SHOUTRANK STYLE)
          ======================================================== */}
      <div className="pointer-events-none absolute inset-x-0 top-[26%] flex justify-center md:top-[18%]">
        <div className="w-[min(148vw,920px)]">
          <div className="relative aspect-square w-full" aria-hidden="true">
            
            {/* Atmospheric Glow Sheens */}
            <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(255,69,0,0.18),transparent_68%)] motion-safe:animate-pulse" />
            <div className="absolute top-0 right-[4%] size-[62%] rounded-full bg-[radial-gradient(circle,rgba(255,106,0,0.22),transparent_64%)]" />
            <div className="absolute top-1/4 left-[10%] size-[50%] rounded-full bg-[radial-gradient(circle,rgba(155,135,255,0.16),transparent_60%)]" />

            {/* Conic Gradient Rim Lighting */}
            <div
              className="absolute inset-[-10%]"
              style={{
                background:
                  "conic-gradient(from 206deg, transparent 0 58%, rgba(255,255,255,0.38) 68%, transparent 78%, rgba(255,69,0,0.35) 88%, transparent 100%)",
                maskImage: "radial-gradient(circle, transparent 30%, #000 42%, transparent 68%)",
                WebkitMaskImage: "radial-gradient(circle, transparent 30%, #000 42%, transparent 68%)",
              }}
            />

            {/* High-Resolution Earth Globe Masked */}
            <Image
              src="/brand/earth.webp"
              alt="Reddit Global Conversations Network"
              width={1024}
              height={1024}
              priority
              className="relative size-full object-contain select-none"
              style={{
                maskImage: "radial-gradient(circle, #000 43%, transparent 52%)",
                WebkitMaskImage: "radial-gradient(circle, #000 43%, transparent 52%)",
              }}
            />

            {/* Orbit Ring 1 (Orange glow node) */}
            <div className="absolute inset-[1%] rounded-full border border-[#FF4500]/30 animate-orbit">
              <span className="absolute top-0 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4500] shadow-[0_0_12px_3px_rgba(255,69,0,0.85)]" />
              <span className="absolute bottom-[14%] left-[6%] size-1.5 -translate-x-1/2 rounded-full bg-[#FFA000]" />
            </div>

            {/* Orbit Ring 2 (Purple reverse orbit node) */}
            <div className="absolute inset-[-9%] rounded-full border border-[#9b87ff]/25 animate-orbit-rev">
              <span className="absolute top-[18%] right-0 size-2 translate-x-1/2 rounded-full bg-[#c4b5fd] shadow-[0_0_12px_2px_rgba(196,181,253,0.8)]" />
            </div>

            {/* Orbit Ring 3 (Outer subtle white ring with teal node) */}
            <div className="absolute rounded-full border border-white/10" style={{ inset: "-2%" }}>
              <span className="absolute top-0 left-[18%] animate-orbit" style={{ animationDuration: "28s" }}>
                <span className="block -translate-x-1/2 -translate-y-1/2">
                  <span className="block size-2 rounded-full bg-[#5eead4] shadow-[0_0_12px_2px_rgba(94,234,212,0.85)]" />
                </span>
              </span>
            </div>

            {/* Orbit Ring 4 (Inner geometric diamond node) */}
            <div className="absolute rounded-full border border-white/10" style={{ inset: "10%" }}>
              <span className="absolute top-[8%] right-0 animate-orbit-rev" style={{ animationDuration: "22s" }}>
                <span className="block -translate-x-1/2 -translate-y-1/2">
                  <span className="block size-2.5 rotate-45 border border-[#FFA000] bg-[#FFA000]/40 shadow-[0_0_10px_2px_rgba(255,160,0,0.6)]" />
                </span>
              </span>
            </div>

            {/* Orbit Ring 5 (Widest boundary ring with circular node) */}
            <div className="absolute rounded-full border border-white/10" style={{ inset: "-15%" }}>
              <span className="absolute bottom-0 left-1/2 animate-orbit" style={{ animationDuration: "38s" }}>
                <span className="block -translate-x-1/2 -translate-y-1/2">
                  <span className="block size-3 rounded-full border border-[#FF8A65] bg-[#07060d]/80" />
                </span>
              </span>
            </div>

            {/* Orbit Ring 6 (Inner glow node) */}
            <div className="absolute rounded-full border border-white/10" style={{ inset: "6%" }}>
              <span className="absolute bottom-[6%] left-0 animate-orbit-rev" style={{ animationDuration: "20s" }}>
                <span className="block -translate-x-1/2 -translate-y-1/2">
                  <span className="block size-2 rounded-full bg-[#FF5722] shadow-[0_0_14px_3px_rgba(255,87,34,0.8)]" />
                </span>
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Atmospheric Horizon Vignette Overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#07060d_0%,rgba(7,6,13,0.8)_20%,transparent_42%,rgba(7,6,13,0.92)_82%,#07060d_100%)]"
        aria-hidden="true"
      />

      {/* Subtle Matrix Grid */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:44px_44px]" 
        aria-hidden="true"
      />

      {/* ========================================================
          FOREGROUND CONTENT: CENTERED ELEVATED SAAS COMPOSITION
          ======================================================== */}
      <div className="relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-between">
        
        {/* Top/Hero Main Stage */}
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 pt-8 sm:pt-12 md:pt-16 text-center">
          
          {/* Top Monospaced Meta Eyebrow */}
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.25em] text-white/70 uppercase mb-3 max-w-full px-2 truncate">
            {heroConfig.metaEyebrow}
          </p>

          {/* Social Proof Rating Pill */}
          <div className="inline-flex items-center gap-2.5 sm:gap-3 rounded-full border border-white/10 bg-[#07060d]/85 backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 text-left mb-4 sm:mb-5 shadow-xl hover:border-white/20 transition-colors max-w-full">
            {/* Overlapping User Avatars */}
            <div className="flex -space-x-2 shrink-0" aria-hidden="true">
              <Image
                src="/brand/desk-1.webp"
                alt="Client avatar 1"
                width={32}
                height={32}
                className="size-6 sm:size-7 md:size-8 rounded-full border-2 border-[#07060d] object-cover"
              />
              <Image
                src="/brand/desk-2.webp"
                alt="Client avatar 2"
                width={32}
                height={32}
                className="size-6 sm:size-7 md:size-8 rounded-full border-2 border-[#07060d] object-cover"
              />
              <Image
                src="/brand/desk-3.webp"
                alt="Client avatar 3"
                width={32}
                height={32}
                className="size-6 sm:size-7 md:size-8 rounded-full border-2 border-[#07060d] object-cover"
              />
            </div>

            {/* Golden Stars + Rating Text */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="flex gap-0.5 text-[#f6c453]" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3 sm:size-3.5 fill-[#f6c453] text-[#f6c453]" />
                ))}
              </div>
              <span className="text-[11px] sm:text-xs md:text-[13px] font-medium text-white/85">
                {heroConfig.ratingText}
              </span>
              <span className="hidden md:inline text-white/30">•</span>
              <span className="hidden md:inline text-xs text-white/60">
                {heroConfig.ratingSub}
              </span>
            </div>
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
          <p className="mx-auto mt-3.5 sm:mt-4 max-w-2xl text-xs sm:text-base md:text-lg leading-relaxed text-white/75 font-normal px-2">
            {heroConfig.subheading}
          </p>

          {/* Second Smaller Line with Sliding Words for Earners */}
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 font-medium mt-3 backdrop-blur-sm">
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

          {/* Horizontal Capability Badges Row (ShoutRank Style) */}
          <ul className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mt-4 sm:mt-5 px-1">
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-7">
            {/* Primary Action Button: WhatsApp Direct Chat (ShoutRank crisp pill style) */}
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

            {/* Quick Earner Route */}
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
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 pt-10 pb-4">
          
          {/* 3 Floating Glass Signal Cards (Desktop & Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8">
            {heroConfig.signalCards.map((card, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-white/15 bg-[#07060d]/85 backdrop-blur-md p-4 sm:p-5 text-left transition-all duration-300 hover:border-white/30 hover:bg-[#07060d]/95 hover:shadow-2xl hover:shadow-black/60 overflow-hidden"
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
