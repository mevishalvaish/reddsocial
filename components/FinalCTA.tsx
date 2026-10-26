"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  const scrollToSignup = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const signupEl = document.getElementById("signup");
    if (signupEl) {
      signupEl.scrollIntoView({ behavior: "smooth" });
      const input = document.getElementById("email-input");
      if (input) {
        setTimeout(() => input.focus(), 400);
      }
    }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#1A1A1B] text-white overflow-hidden">
      {/* Subtle background glow & geometric threads */}
      <div 
        className="absolute inset-0 bg-radial from-[#FF4500]/10 via-transparent to-transparent opacity-50 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle accent badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#252526] border border-white/10 text-[#FF4500] text-xs font-bold tracking-wider uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Launch Access</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
          Ready to Turn Conversations Into Growth?
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-[#EDEFF1]/80 max-w-2xl mx-auto leading-relaxed mb-10">
          ConvoLift is preparing to help high-growth companies build an enduring, profitable presence across targeted Reddit communities.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#signup"
            onClick={scrollToSignup}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FF4500] hover:bg-[#E03D00] text-white font-bold text-base shadow-lg transition-all duration-200 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF4500]"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Minimal decorative thread nodes */}
        <div className="mt-14 flex items-center justify-center gap-4 text-xs text-[#EDEFF1]/50 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            500+ Publisher Network
          </span>
          <span>•</span>
          <span>Thread Posts &amp; Comments</span>
          <span>•</span>
          <span>Upvote Amplification</span>
        </div>

      </div>
    </section>
  );
}
