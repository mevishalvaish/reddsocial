"use client";

import React from "react";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { HeroIllustration } from "./HeroIllustration";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Eyebrow badge & 500+ Publisher network pill */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E9] border border-[#FF4500]/20 text-[#FF4500] text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>REDDIT MARKETING AGENCY</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F6F7F8] border border-[#EDEFF1] text-[#1A1A1B] text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#FF4500]" />
                <span>500+ REDDIT PUBLISHERS IN NETWORK</span>
              </div>
            </div>

            {/* Main Headline: Turn Reddit Conversations Into Brand Growth. */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1A1A1B] leading-[1.12] mb-6">
              Turn Reddit Conversations{" "}
              <span className="text-[#FF4500] relative inline-block">
                Into Brand Growth.
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2 text-[#FF4500]/25"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-[#576F76] font-normal leading-relaxed max-w-2xl mb-8">
              Get your brand noticed where conversations happen. ConvoLift helps businesses reach relevant Reddit communities through posts, comments, and upvote services, helping you reach more users, attract potential customers, and improve your brand’s visibility across LLMs and AI-powered search.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
              <a
                href="#signup"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("signup");
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF4500] text-white font-semibold text-base shadow-sm transition-all duration-200 hover:bg-[#E03D00] hover:shadow-md active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF4500]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("services");
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F6F7F8] hover:bg-[#EDEFF1] text-[#1A1A1B] font-semibold text-base border border-[#EDEFF1] transition-all duration-200 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#1A1A1B]"
              >
                <Compass className="w-4 h-4 text-[#576F76]" />
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Our Services Feature Strip */}
            <div className="pt-1 mb-8">
              <div className="inline-flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#576F76] bg-[#F6F7F8] border border-[#EDEFF1] px-4 py-2.5 rounded-xl">
                <span className="font-bold text-[#1A1A1B]">Our Services:</span>
                <span className="text-[#1A1A1B] font-semibold">Reddit Post Posting</span>
                <span className="text-[#576F76]/40 font-bold">·</span>
                <span className="text-[#1A1A1B] font-semibold">Reddit Comment Marketing</span>
                <span className="text-[#576F76]/40 font-bold">·</span>
                <span className="text-[#1A1A1B] font-semibold">Reddit Upvote Services</span>
              </div>
            </div>

            {/* Coming Soon Indicator */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#576F76]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4500] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF4500]"></span>
              </span>
              <span>ConvoLift is launching soon for forward-thinking brands.</span>
            </div>
          </div>

          {/* Right Column: Floating Interface Hero Visual */}
          <div className="lg:col-span-5 w-full">
            <HeroIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}
