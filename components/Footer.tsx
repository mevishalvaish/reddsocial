"use client";

import React, { useState } from "react";
import { Logo } from "./Logo";
import { Shield, X } from "lucide-react";

export function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#EDEFF1] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#EDEFF1]">
          {/* Brand & Description */}
          <div className="max-w-md">
            <Logo size="md" />
            <p className="mt-3 text-sm text-[#576F76] font-normal leading-relaxed">
              Reddit Marketing &amp; Community Growth. Helping brands engage authentically, discover real audiences, and participate in meaningful conversations.
            </p>
          </div>

          {/* Status & Privacy Notice Action */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F6F7F8] border border-[#EDEFF1] text-xs font-semibold text-[#576F76]">
              <span className="w-2 h-2 rounded-full bg-[#FF4500]" />
              <span>Coming Soon • Launching Soon</span>
            </div>

            <button
              type="button"
              onClick={() => setShowPrivacyModal(true)}
              className="text-xs font-medium text-[#576F76] hover:text-[#1A1A1B] underline-offset-4 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4500] rounded"
            >
              Launch Notification Privacy
            </button>
          </div>
        </div>

        {/* Bottom Legal & Trademark Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#576F76]">
          <p>
            &copy; {currentYear} ReddSocial. All rights reserved.
          </p>

          <p className="max-w-xl text-[11px] leading-relaxed text-[#576F76]/80">
            Disclaimer: ReddSocial is an independent community marketing agency and is not affiliated with, sponsored by, or endorsed by Reddit, Inc. Reddit is a registered trademark of Reddit, Inc.
          </p>
        </div>

      </div>

      {/* Accessible Privacy Information Modal */}
      {showPrivacyModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in"
          onClick={() => setShowPrivacyModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-xl border border-[#EDEFF1] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EDEFF1]">
              <div className="flex items-center gap-2 text-[#1A1A1B] font-bold text-base">
                <Shield className="w-4 h-4 text-[#FF4500]" />
                <h3 id="privacy-modal-title">Launch Notification Privacy Notice</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="p-1.5 text-[#576F76] hover:text-[#1A1A1B] rounded-lg hover:bg-[#F6F7F8] transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-[#576F76] space-y-3 leading-relaxed">
              <p>
                <strong>Information We Collect:</strong> When you register for updates on reddsocial.com, we collect only your provided email address.
              </p>
              <p>
                <strong>Purpose:</strong> Your email address is exclusively used to notify you of ReddSocial’s upcoming launch and major platform announcements.
              </p>
              <p>
                <strong>No Sharing or Selling:</strong> We do not sell, rent, or trade your personal information to third parties. We treat your inbox with the same respect we bring to community discussions.
              </p>
              <p>
                <strong>Unsubscribing:</strong> Every launch update will contain an immediate unsubscribe link allowing you to opt out at any time.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EDEFF1] flex justify-end">
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="px-4 py-2 bg-[#F6F7F8] hover:bg-[#EDEFF1] text-[#1A1A1B] text-xs font-semibold rounded-lg transition-colors"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
