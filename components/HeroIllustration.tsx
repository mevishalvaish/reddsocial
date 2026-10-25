"use client";

import React from "react";
import { MessageSquare, Sparkles, Hash, CornerDownRight, Users2, HelpCircle, CheckCircle2 } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none flex items-center justify-center py-6 sm:py-8 lg:py-12 select-none overflow-hidden sm:overflow-visible">
      {/* Background ambient radial glow */}
      <div 
        className="absolute inset-0 bg-radial from-[#FFF0E9] via-transparent to-transparent opacity-70 blur-2xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Decorative SVG connection paths between discussion nodes */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-[#EDEFF1]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="threadGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EDEFF1" />
            <stop offset="50%" stopColor="#FF4500" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#EDEFF1" />
          </linearGradient>
          <linearGradient id="threadGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EDEFF1" />
            <stop offset="100%" stopColor="#FF4500" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Curved connecting threads */}
        <path
          d="M 120 110 C 180 140, 240 180, 280 230"
          fill="none"
          stroke="url(#threadGradient1)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M 320 280 C 260 340, 210 370, 160 410"
          fill="none"
          stroke="url(#threadGradient2)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Community Conversation Canvas */}
      <div className="relative w-full min-h-[440px] sm:min-h-[500px] flex flex-col justify-between py-2 space-y-4 sm:space-y-0">
        {/* Floating Card 1: Top Left - Question / Discovery */}
        <div className="animate-float-1 relative z-20 self-start w-full sm:w-[78%] bg-white rounded-xl border border-[#EDEFF1] p-4 sm:p-5 shadow-xs transition-shadow duration-300 hover:shadow-md">
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#EDEFF1]/70">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#FFF0E9] text-[#FF4500] flex items-center justify-center">
                <Hash className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-semibold text-[#576F76] tracking-wide">
                Community Discussion
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#576F76]/80 bg-[#F6F7F8] px-2 py-0.5 rounded-full">
              <HelpCircle className="w-3 h-3 text-[#FF4500]" />
              Topic
            </span>
          </div>
          <p className="text-sm sm:text-base font-semibold text-[#1A1A1B] leading-snug">
            &ldquo;What&rsquo;s the best way to grow a SaaS community?&rdquo;
          </p>
          <div className="mt-3 flex items-center gap-3 text-xs text-[#576F76]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
              Authentic participation
            </span>
            <span className="text-[#EDEFF1]">•</span>
            <span>Organic exchange</span>
          </div>
        </div>

        {/* Floating Card 2: Center Right - Problem Solver / Needs */}
        <div className="animate-float-2 relative z-10 self-end w-[96%] sm:w-[82%] bg-white rounded-xl border border-[#EDEFF1] p-4 sm:p-5 shadow-xs transition-shadow duration-300 hover:shadow-md sm:-mt-6">
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#EDEFF1]/70">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#F6F7F8] text-[#576F76] flex items-center justify-center">
                <Users2 className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-semibold text-[#576F76] tracking-wide">
                Audience Perspective
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#FF4500] bg-[#FFF0E9] px-2 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3" />
              Opportunity
            </span>
          </div>
          <p className="text-sm sm:text-base font-medium text-[#1A1A1B] leading-snug">
            &ldquo;Looking for tools that solve this problem.&rdquo;
          </p>
          <div className="mt-3 flex items-center justify-between text-xs text-[#576F76]">
            <span className="flex items-center gap-1">
              <CornerDownRight className="w-3.5 h-3.5 text-[#576F76]" />
              Relevant recommendations
            </span>
            <span className="text-[11px] font-medium text-[#576F76] bg-[#F6F7F8] px-2 py-0.5 rounded">
              High intent
            </span>
          </div>
        </div>

        {/* Floating Card 3: Bottom Left - Value & Solutions */}
        <div className="animate-float-3 relative z-30 self-start w-full sm:w-[84%] bg-[#F6F7F8] rounded-xl border border-[#EDEFF1] p-4 sm:p-5 shadow-xs transition-shadow duration-300 hover:shadow-md sm:-mt-6">
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#EDEFF1]">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#FF4500] text-white flex items-center justify-center shadow-xs">
                <MessageSquare className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-semibold text-[#1A1A1B] tracking-wide">
                Thoughtful Contribution
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1A1A1B] bg-white px-2 py-0.5 rounded-full border border-[#EDEFF1]">
              <CheckCircle2 className="w-3 h-3 text-[#FF4500]" />
              Helpful Insight
            </span>
          </div>
          <p className="text-sm sm:text-base font-semibold text-[#1A1A1B] leading-snug">
            &ldquo;Here&rsquo;s what worked for our team.&rdquo;
          </p>
          <p className="mt-2 text-xs text-[#576F76] leading-relaxed">
            Transparent insights and practical takeaways that build lasting community trust.
          </p>
        </div>

        {/* Small floating meta tags illustrating community ecosystem */}
        <div className="hidden sm:flex items-center justify-between px-3 pt-2 text-[11px] text-[#576F76] font-medium">
          <span className="inline-flex items-center gap-1.5 bg-white border border-[#EDEFF1] px-2.5 py-1 rounded-full shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            Community-First Dialogue
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white border border-[#EDEFF1] px-2.5 py-1 rounded-full shadow-2xs">
            Respect Guidelines & Culture
          </span>
        </div>
      </div>
    </div>
  );
}
