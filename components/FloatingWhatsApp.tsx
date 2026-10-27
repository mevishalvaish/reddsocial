"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/lib/contentConfig";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside 
      aria-label="Contact options"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none"
    >
      {/* Friendly Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#14141A] border border-[#22222E] text-white text-xs font-semibold py-2 px-3.5 rounded-full shadow-2xl backdrop-blur-md animate-fade-in group">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Have questions? Chat on WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white p-0.5 rounded transition-colors ml-1"
            aria-label="Dismiss chat tip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Chat with Convolift on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 blur-sm group-hover:blur-md transition-all animate-pulse" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-white/10 stroke-[2.2]" />
      </a>
    </aside>
  );
}
