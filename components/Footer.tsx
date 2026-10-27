"use client";

import React, { useState } from "react";
import { Logo } from "./Logo";
import { Shield, X, ArrowUpRight, FileText, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/contentConfig";

export function Footer() {
  const [modalType, setModalType] = useState<"privacy" | "terms" | "guidelines" | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#07070A] border-t border-[#1C1C26] py-12 sm:py-16 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-[#1C1C26]">
          
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2">
            <Logo size="md" showTagline={true} />
            <p className="mt-4 text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Convolift helps startups and brands join the right Reddit discussions through real comments and posts, while empowering genuine Reddit users to earn by completing approved tasks.
            </p>
            <div className="mt-5 flex items-center gap-3 text-xs text-gray-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14141A] border border-[#22222E]">
                <span className="w-2 h-2 rounded-full bg-[#FF4500]" />
                <span>Reddit Marketing, Done Right</span>
              </span>
            </div>
          </div>

          {/* Quick Links: Brands */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              For Brands
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("services");
                  }}
                  className="hover:text-white transition-colors"
                >
                  Reddit Posts
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("services");
                  }}
                  className="hover:text-white transition-colors"
                >
                  Comment Marketing
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("how-it-works");
                  }}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#why"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("why");
                  }}
                  className="hover:text-white transition-colors"
                >
                  The Convolift Standard
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links: Earners */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              For Earners
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="#earn"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("earn");
                  }}
                  className="hover:text-white transition-colors text-emerald-400 font-medium"
                >
                  Earn With Us
                </a>
              </li>
              <li>
                <a
                  href="#earn"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("earn");
                  }}
                  className="hover:text-white transition-colors"
                >
                  Task Rates
                </a>
              </li>
              <li>
                <a
                  href="#earn"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("earn");
                  }}
                  className="hover:text-white transition-colors"
                >
                  Reddit User Eligibility
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("faq");
                  }}
                  className="hover:text-white transition-colors"
                >
                  Earner FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Trust &amp; Legal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => setModalType("guidelines")}
                  className="hover:text-white transition-colors text-left"
                >
                  Community Guidelines
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setModalType("terms")}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setModalType("privacy")}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Notice
                </button>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Direct WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; 2026 {siteConfig.brandName}. All rights reserved.
          </p>
          <p className="max-w-xl text-[11px] leading-relaxed text-gray-500">
            Disclaimer: Convolift is an independent community marketing agency and is not affiliated with, sponsored by, or endorsed by Reddit, Inc. Reddit is a registered trademark of Reddit, Inc. We never guarantee upvote totals, rankings, or income.
          </p>
        </div>

      </div>

      {/* Accessible Modals */}
      {modalType && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setModalType(null)}
        >
          <div
            className="bg-[#14141A] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#22222E] text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#22222E]">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <FileText className="w-4 h-4 text-[#FF4500]" />
                <h3>
                  {modalType === "privacy" && "Privacy Notice"}
                  {modalType === "terms" && "Terms of Service"}
                  {modalType === "guidelines" && "Community Guidelines"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="p-1 text-gray-400 hover:text-white rounded-lg hover:bg-[#1E1E28] transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-gray-300 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {modalType === "privacy" && (
                <>
                  <p>
                    <strong>Information Collected:</strong> We collect contact details (name, email, communication handles) strictly to provide marketing campaign coordination or assign approved tasks.
                  </p>
                  <p>
                    <strong>No Data Selling:</strong> We never sell, rent, or trade client details, Reddit user account handles, or lead data to third parties.
                  </p>
                  <p>
                    <strong>Security:</strong> All submitted data is stored securely. Payout records are handled under strict confidentiality.
                  </p>
                </>
              )}

              {modalType === "terms" && (
                <>
                  <p>
                    <strong>Service Scope:</strong> Convolift coordinates authentic community discussions on Reddit. We do not provide spam services, bot networks, or artificial manipulation.
                  </p>
                  <p>
                    <strong>No Guaranteed Rankings:</strong> Community reception, upvotes, and moderator decisions are inherently dynamic. We do not promise fixed position rankings.
                  </p>
                  <p>
                    <strong>Reddit User Compensation:</strong> Reddit users are paid per task upon verification and approval. There are zero signup fees.
                  </p>
                </>
              )}

              {modalType === "guidelines" && (
                <>
                  <p>
                    <strong>Subreddit Rules:</strong> Every Reddit user must inspect and abide by the targeted subreddit&rsquo;s specific rules and posting guidelines.
                  </p>
                  <p>
                    <strong>Genuine Accounts:</strong> Only aged accounts with organic karma history are permitted. Multiple alt accounts or automated posting tools are strictly prohibited.
                  </p>
                  <p>
                    <strong>Tone of Voice:</strong> Contributions must be constructive, helpful, and natural. Aggressive sales pitches and deceptive reviews are rejected.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#22222E] flex justify-end">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-4 py-2 bg-[#1E1E28] hover:bg-[#282838] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
