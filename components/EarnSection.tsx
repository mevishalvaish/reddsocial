"use client";

import React from "react";
import {
  DollarSign,
  FileEdit,
  MessageCircle,
  CornerDownRight,
  TrendingUp,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Award,
} from "lucide-react";
import { earnerConfig } from "@/lib/contentConfig";

export function EarnSection() {
  const getTaskIcon = (iconName: string) => {
    switch (iconName) {
      case "FileEdit":
        return <FileEdit className="w-5 h-5 text-emerald-400" />;
      case "MessageCircle":
        return <MessageCircle className="w-5 h-5 text-emerald-400" />;
      case "CornerDownRight":
        return <CornerDownRight className="w-5 h-5 text-emerald-400" />;
      case "TrendingUp":
      default:
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
    }
  };

  const scrollToEarnerContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(new CustomEvent("switch-contact-tab", { detail: "earner" }));
    }
  };

  return (
    <section id="earn" className="py-20 sm:py-28 bg-[#101017] border-y border-[#22222E] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-4">
            <DollarSign className="w-3.5 h-3.5" />
            <span>{earnerConfig.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {earnerConfig.headline}
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {earnerConfig.subheadline}
          </p>

          {/* No Joining Fee Badge */}
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-1.5 rounded-full bg-[#181824] border border-[#2E2E3E] text-xs font-medium text-gray-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400 font-bold">{earnerConfig.badgeNoFee}</span>
          </div>
        </div>

        {/* 4 Task Types Grid */}
        <div className="mb-14">
          <h3 className="text-lg font-bold text-white mb-6 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
            <Award className="w-5 h-5 text-[#FF4500]" />
            <span>Available Task Types &amp; Earnings</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {earnerConfig.tasks.map((task, index) => (
              <div
                key={index}
                className="bg-[#14141A] rounded-2xl border border-[#22222E] p-6 hover:border-emerald-500/40 hover:bg-[#181824] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      {getTaskIcon(task.iconName)}
                    </div>
                    <span className="text-xs font-semibold text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {task.avgTime}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {task.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    {task.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#22222E] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-500 uppercase">Payout / Task</span>
                  <span className="text-base font-black text-emerald-400">{task.ratePlaceholder}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pay-per-task disclaimer note */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500 italic">
              Note: {earnerConfig.disclaimer}
            </p>
          </div>
        </div>

        {/* 4-Step Flow & Requirements Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left: 4-Step How to Start Earning */}
          <div className="lg:col-span-7 bg-[#14141A] rounded-2xl border border-[#22222E] p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>4 Steps to Start Earning</span>
            </h3>

            <div className="space-y-6">
              {earnerConfig.fourStepFlow.map((flow, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1E1E2A] border border-[#2E2E3E] text-emerald-400 font-black text-sm flex items-center justify-center shrink-0">
                    {flow.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {flow.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {flow.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Requirements Checklist & Fast Apply */}
          <div className="lg:col-span-5 bg-[#14141A] rounded-2xl border border-[#22222E] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F1F2C] text-xs font-semibold text-gray-300 mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Worker Eligibility</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Account Requirements
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                To protect subreddits from spam and maintain client satisfaction, every earner must meet these standards:
              </p>

              <ul className="space-y-3 mb-8">
                {earnerConfig.requirements.map((req, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Button */}
            <button
              type="button"
              onClick={scrollToEarnerContact}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
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
