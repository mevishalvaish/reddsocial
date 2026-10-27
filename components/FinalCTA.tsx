"use client";

import React from "react";
import { ArrowRight, Briefcase, DollarSign, Sparkles } from "lucide-react";

export function FinalCTA() {
  const scrollToContact = (tab: "brand" | "earner") => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(new CustomEvent("switch-contact-tab", { detail: tab }));
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0B0B0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Banner 1: For Brands */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#161622] to-[#121218] border border-[#2A2A3A] p-8 sm:p-10 flex flex-col justify-between group hover:border-[#FF4500]/50 transition-all duration-300 shadow-2xl">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4500]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FF4500]/10 border border-[#FF4500]/20 flex items-center justify-center text-[#FF4500] mb-5">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#FF4500] block mb-2">
                For Founders &amp; Marketers
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4 leading-tight">
                Ready to grow on Reddit?
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-8">
                Place your brand in active, high-intent subreddit conversations with genuine posts, comments, and replies that convert.
              </p>
            </div>

            <button
              type="button"
              onClick={() => scrollToContact("brand")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF4500] hover:bg-[#E03D00] text-white font-bold text-sm shadow-lg shadow-[#FF4500]/25 transition-all active:scale-95 w-full sm:w-auto"
            >
              <span>Hire Convolift</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Banner 2: For Earners */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#131E18] to-[#101713] border border-emerald-500/20 p-8 sm:p-10 flex flex-col justify-between group hover:border-emerald-500/50 transition-all duration-300 shadow-2xl">
            {/* Subtle green glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                <DollarSign className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-400 block mb-2">
                For Active Reddit Users
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4 leading-tight">
                Ready to earn from Reddit?
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-8">
                Get paid per approved task using your existing genuine Reddit account. No upfront fees, fast payouts via UPI, PayPal, or Bank.
              </p>
            </div>

            <button
              type="button"
              onClick={() => scrollToContact("earner")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm shadow-lg shadow-emerald-500/25 transition-all active:scale-95 w-full sm:w-auto"
            >
              <span>Apply to Earn</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
