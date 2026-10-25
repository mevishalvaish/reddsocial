"use client";

import React from "react";
import {
  MessageSquare,
  Sparkles,
  ArrowBigUp,
  CornerDownRight,
  BarChart3,
  Flame,
  CheckCircle2,
  TrendingUp,
  Shield,
  Layers
} from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none flex items-center justify-center py-6 sm:py-8 lg:py-12 select-none overflow-hidden sm:overflow-visible">
      {/* Background ambient radial glow */}
      <div
        className="absolute inset-0 bg-radial from-[#FFF0E9] via-transparent to-transparent opacity-80 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative SVG connection paths between thread nodes */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-[#EDEFF1]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="threadGradientA" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EDEFF1" />
            <stop offset="50%" stopColor="#FF4500" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#EDEFF1" />
          </linearGradient>
          <linearGradient id="threadGradientB" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EDEFF1" />
            <stop offset="50%" stopColor="#FF4500" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Thread connecting lines */}
        <path
          d="M 140 100 C 200 130, 260 170, 300 220"
          fill="none"
          stroke="url(#threadGradientA)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M 330 270 C 270 330, 220 360, 160 410"
          fill="none"
          stroke="url(#threadGradientB)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Main Layered Canvas */}
      <div className="relative w-full min-h-[480px] sm:min-h-[520px] flex flex-col justify-between py-2 space-y-4 sm:space-y-0">
        
        {/* Floating Card 1: Top Left - Community Discovery & Discussion Thread */}
        <div className="animate-float-1 relative z-20 self-start w-full sm:w-[84%] bg-white rounded-2xl border border-[#EDEFF1] p-4 sm:p-5 shadow-xs transition-all duration-300 hover:shadow-md">
          {/* Subreddit / Community Label & Intent Tag */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EDEFF1]/80">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#FFF0E9] text-[#FF4500] flex items-center justify-center font-bold text-xs">
                r/
              </span>
              <span className="text-xs font-bold text-[#1A1A1B] tracking-tight">
                industry_leaders
              </span>
              <span className="text-[#EDEFF1]">•</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#576F76]">
                <Flame className="w-3 h-3 text-[#FF4500]" />
                Trending Topic
              </span>
            </div>
            <span className="text-[11px] font-semibold text-[#FF4500] bg-[#FFF0E9] px-2.5 py-0.5 rounded-full border border-[#FF4500]/15">
              High Relevance
            </span>
          </div>

          {/* Question snippet & Upvote indicator */}
          <div className="flex items-start gap-3">
            {/* Illustrative Upvote Pill */}
            <div className="flex flex-col items-center bg-[#F6F7F8] border border-[#EDEFF1] rounded-lg px-1.5 py-1 text-[#576F76] shrink-0">
              <ArrowBigUp className="w-4 h-4 text-[#FF4500]" />
              <span className="text-[11px] font-bold text-[#1A1A1B] leading-none mt-0.5">Top</span>
            </div>

            <div className="flex-1">
              <p className="text-sm sm:text-base font-semibold text-[#1A1A1B] leading-snug">
                &ldquo;What tools or strategies are growing B2B communities without being salesy?&rdquo;
              </p>
              <div className="mt-2.5 flex items-center gap-3 text-xs text-[#576F76]">
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#576F76]">
                  <MessageSquare className="w-3 h-3" />
                  38 replies
                </span>
                <span className="text-[#EDEFF1]">•</span>
                <span className="text-[11px]">Organic Opportunity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Card 2: Center Right - Strategic Comment & Brand Engagement */}
        <div className="animate-float-2 relative z-10 self-end w-[96%] sm:w-[86%] bg-white rounded-2xl border border-[#EDEFF1] p-4 sm:p-5 shadow-xs transition-all duration-300 hover:shadow-md sm:-mt-6">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EDEFF1]/80">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#F6F7F8] text-[#1A1A1B] flex items-center justify-center">
                <CornerDownRight className="w-3.5 h-3.5 text-[#FF4500]" />
              </span>
              <span className="text-xs font-bold text-[#1A1A1B] tracking-tight">
                Helpful Community Response
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              Verified Value
            </span>
          </div>

          <div className="pl-2 border-l-2 border-[#FF4500]/40">
            <p className="text-xs sm:text-sm text-[#1A1A1B] font-medium leading-relaxed">
              &ldquo;We found that sharing transparent benchmarks and answering direct workflow questions builds credibility far better than promotional links.&rdquo;
            </p>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-[#576F76]">
            <span className="flex items-center gap-1 text-[11px]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF4500]" />
              Strategic Brand Voice
            </span>
            <span className="text-[11px] font-bold text-[#FF4500] bg-[#FFF0E9] px-2 py-0.5 rounded">
              Audience Favored
            </span>
          </div>
        </div>

        {/* Floating Card 3: Bottom Left - Analytics & Growth Intelligence */}
        <div className="animate-float-3 relative z-30 self-start w-full sm:w-[88%] bg-[#F6F7F8] rounded-2xl border border-[#EDEFF1] p-4 sm:p-5 shadow-xs transition-all duration-300 hover:shadow-md sm:-mt-6">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EDEFF1]">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-[#FF4500] text-white flex items-center justify-center shadow-xs">
                <BarChart3 className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-bold text-[#1A1A1B] tracking-wide">
                Reddit Campaign Intelligence
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1A1A1B] bg-white px-2 py-0.5 rounded-full border border-[#EDEFF1]">
              <TrendingUp className="w-3 h-3 text-[#FF4500]" />
              Insights Engine
            </span>
          </div>

          {/* Mini Analytics Grid */}
          <div className="grid grid-cols-3 gap-2.5 pt-1">
            <div className="bg-white p-2.5 rounded-xl border border-[#EDEFF1] text-center">
              <span className="text-[10px] uppercase font-bold text-[#576F76] tracking-wider block">
                Publishers
              </span>
              <span className="text-sm font-extrabold text-[#FF4500]">500+ Active</span>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-[#EDEFF1] text-center">
              <span className="text-[10px] uppercase font-bold text-[#576F76] tracking-wider block">
                Deliverables
              </span>
              <span className="text-sm font-extrabold text-[#1A1A1B]">Posts &amp; Comments</span>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-[#EDEFF1] text-center">
              <span className="text-[10px] uppercase font-bold text-[#576F76] tracking-wider block">
                Upvotes
              </span>
              <span className="text-sm font-extrabold text-emerald-600">Amplified</span>
            </div>
          </div>
        </div>

        {/* Ambient Community Trust Badges */}
        <div className="hidden sm:flex items-center justify-between px-3 pt-2 text-[11px] text-[#576F76] font-medium">
          <span className="inline-flex items-center gap-1.5 bg-white border border-[#EDEFF1] px-2.5 py-1 rounded-full shadow-2xs">
            <Shield className="w-3.5 h-3.5 text-[#FF4500]" />
            Subreddit Rules Respected
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white border border-[#EDEFF1] px-2.5 py-1 rounded-full shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#576F76]" />
            Human-Led Participation
          </span>
        </div>

      </div>
    </div>
  );
}
