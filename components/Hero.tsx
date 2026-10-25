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
          
          {/* Left Column: Headline, Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#FFF0E9] border border-[#FF4500]/20 text-[#FF4500] text-xs font-bold tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Reddit Marketing & Community Growth</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1A1B] leading-[1.12] mb-6">
              Big Ideas Start With{" "}
              <span className="text-[#FF4500] relative inline-block">
                Real Conversations.
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
              ReddSocial helps businesses connect with the communities that matter through thoughtful Reddit marketing, meaningful engagement, and audience insights. We&rsquo;re building something exciting and getting ready to launch.
            </p>

            {/* Two CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <a
                href="#signup"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("signup");
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF4500] text-white font-semibold text-base shadow-sm transition-all duration-200 hover:bg-[#E03D00] hover:shadow-md active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF4500]"
              >
                <span>Get Launch Updates</span>
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
                <span>Explore What&rsquo;s Coming</span>
              </a>
            </div>

            {/* Status indicator line */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#576F76]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4500] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF4500]"></span>
              </span>
              <span>Something good is coming to the conversation.</span>
            </div>
          </div>

          {/* Right Column: Hero Illustration */}
          <div className="lg:col-span-5 w-full">
            <HeroIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}
