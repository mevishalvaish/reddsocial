"use client";

import React from "react";
import {
  MessageCircle,
  Send,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  DollarSign,
  Clock,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/lib/contentConfig";

// Custom Discord SVG Icon
function DiscordIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Discord"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0B0B0F] border-t border-[#22222E] scroll-mt-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FF4500]/10 via-[#25D366]/5 to-[#5865F2]/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141E] border border-[#262638] text-gray-200 text-xs font-semibold tracking-wider uppercase mb-4 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
            <span>Direct 1-on-1 Access</span>
            <Sparkles className="w-3.5 h-3.5 text-[#FF4500]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Message Us Directly
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            No long contact forms, no waiting days for email replies. Chat with our core team on Telegram, Discord, or WhatsApp for instant strategy, quotes, or Reddit user onboarding.
          </p>
        </div>

        {/* 3 Large Direct Messaging Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Telegram */}
          <div className="group relative bg-[#13131A] hover:bg-[#171722] rounded-3xl border border-[#222230] hover:border-[#229ED9]/60 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between shadow-2xl overflow-hidden hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#229ED9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#229ED9]/10 border border-[#229ED9]/25 flex items-center justify-center text-[#229ED9] group-hover:scale-110 group-hover:bg-[#229ED9] group-hover:text-white transition-all shadow-lg shadow-[#229ED9]/10">
                  <Send className="w-6 h-6 -translate-x-0.5 translate-y-0.5" />
                </div>
                <span className="text-[11px] font-bold text-[#229ED9] bg-[#229ED9]/10 border border-[#229ED9]/20 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#229ED9] animate-pulse" />
                  Fastest Reply
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-1 group-hover:text-[#229ED9] transition-colors">
                Telegram
              </h3>
              <p className="text-xs font-semibold text-gray-400 mb-3 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span>+91 9022030872 • Reply under 5 mins</span>
              </p>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                Our team is online 24/7 on Telegram. Send us your website, target subreddits, or Reddit profile link for immediate response.
              </p>
            </div>

            <a
              href={siteConfig.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#229ED9] hover:bg-[#1d8dc3] text-white font-extrabold text-sm transition-all shadow-lg shadow-[#229ED9]/25 group-hover:shadow-[#229ED9]/40 active:scale-95"
            >
              <span>Message on Telegram</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Card 2: Discord */}
          <div className="group relative bg-[#13131A] hover:bg-[#171722] rounded-3xl border border-[#222230] hover:border-[#5865F2]/60 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between shadow-2xl overflow-hidden hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#5865F2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#5865F2]/10 border border-[#5865F2]/25 flex items-center justify-center text-[#5865F2] group-hover:scale-110 group-hover:bg-[#5865F2] group-hover:text-white transition-all shadow-lg shadow-[#5865F2]/10">
                  <DiscordIcon className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold text-[#5865F2] bg-[#5865F2]/10 border border-[#5865F2]/20 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5865F2] animate-pulse" />
                  Direct &amp; Server
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-1 group-hover:text-[#5865F2] transition-colors">
                Discord
              </h3>
              <p className="text-xs font-semibold text-gray-400 mb-3 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span>DM or Community Server</span>
              </p>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                Prefer Discord? Add our handle or join our private community server to chat with our team and review real task flows.
              </p>
            </div>

            <a
              href={siteConfig.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white font-extrabold text-sm transition-all shadow-lg shadow-[#5865F2]/25 group-hover:shadow-[#5865F2]/40 active:scale-95"
            >
              <span>Message on Discord</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="group relative bg-[#13131A] hover:bg-[#171722] rounded-3xl border border-[#222230] hover:border-[#25D366]/60 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between shadow-2xl overflow-hidden hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#25D366] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/25 flex items-center justify-center text-[#25D366] group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-white transition-all shadow-lg shadow-[#25D366]/10">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-bold text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/20 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  1-on-1 Chat
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-1 group-hover:text-[#25D366] transition-colors">
                WhatsApp
              </h3>
              <p className="text-xs font-semibold text-gray-400 mb-3 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span>+91 9022030872 • Instant Chat</span>
              </p>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                Start a direct conversation on WhatsApp. Share requirements, get custom campaign proposals, or submit Reddit user applications.
              </p>
            </div>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm transition-all shadow-lg shadow-[#25D366]/25 group-hover:shadow-[#25D366]/40 active:scale-95"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Audience Guidance Row: What to send */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Box 1: For Brands */}
          <div className="bg-[#14141E] rounded-2xl border border-[#242436] p-6 sm:p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#FF4500]/10 border border-[#FF4500]/25 flex items-center justify-center text-[#FF4500]">
                <Briefcase className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-white">
                For Brands &amp; Businesses:
              </h4>
            </div>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              When messaging us, feel free to share:
            </p>
            <ul className="space-y-2.5 text-xs text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" />
                <span>Your product or website URL</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" />
                <span>Target subreddits or ideal customer profile</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" />
                <span>Service desired (Posts, Comments, Replies, or Full Campaign)</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#222230]">
              <a
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#229ED9]/10 border border-[#229ED9]/30 text-[#229ED9] text-xs font-semibold hover:bg-[#229ED9] hover:text-white transition-all"
              >
                <span>Telegram Brand Brief</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={siteConfig.whatsappBrandUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold hover:bg-[#25D366] hover:text-white transition-all"
              >
                <span>WhatsApp Brand Brief</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Box 2: For Earners */}
          <div className="bg-[#14141E] rounded-2xl border border-[#242436] p-6 sm:p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                <DollarSign className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-white">
                For Reddit Users &amp; Earners:
              </h4>
            </div>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              When applying to complete tasks, send us:
            </p>
            <ul className="space-y-2.5 text-xs text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Your Reddit profile link (username, karma, account age)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Fresh accounts &amp; 10, 20, 30, 50, 100+ karma accounts are welcome</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Subreddits or topics you are genuinely knowledgeable in</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Your country &amp; preferred payout method (UPI, PayPal, Bank)</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#222230]">
              <a
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#229ED9]/10 border border-[#229ED9]/30 text-[#229ED9] text-xs font-semibold hover:bg-[#229ED9] hover:text-white transition-all"
              >
                <span>Telegram Earner Apply</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={siteConfig.whatsappEarnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold hover:bg-[#25D366] hover:text-white transition-all"
              >
                <span>WhatsApp Earner Apply</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
