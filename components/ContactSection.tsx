"use client";

import React, { useState, useEffect } from "react";
import {
  Briefcase,
  DollarSign,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/contentConfig";

type ContactTab = "brand" | "earner";

export function ContactSection() {
  const [activeTab, setActiveTab] = useState<ContactTab>("brand");

  // Brand Form State
  const [brandForm, setBrandForm] = useState({
    name: "",
    email: "",
    website: "",
    serviceNeeded: "Full Campaign (Posts + Comments + Replies)",
    budgetRange: "$500 – $1,000",
    message: "",
  });
  const [brandStatus, setBrandStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [brandError, setBrandError] = useState("");

  // Earner Form State
  const [earnerForm, setEarnerForm] = useState({
    name: "",
    email: "",
    redditUsername: "",
    accountAge: "6-12 months",
    karma: "500 - 2,000 karma",
    country: "",
    preferredPayment: "UPI",
    contactHandle: "",
    shortMessage: "",
  });
  const [earnerStatus, setEarnerStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [earnerError, setEarnerError] = useState("");

  // Listen for custom tab switch events from other sections
  useEffect(() => {
    const handleSwitch = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (typeof customEvent.detail === "string") {
        setActiveTab(customEvent.detail as ContactTab);
      } else if (customEvent.detail?.tab) {
        setActiveTab(customEvent.detail.tab as ContactTab);
        if (customEvent.detail.service) {
          setBrandForm((prev) => ({ ...prev, serviceNeeded: customEvent.detail.service }));
        }
      }
    };
    window.addEventListener("switch-contact-tab", handleSwitch);
    return () => window.removeEventListener("switch-contact-tab", handleSwitch);
  }, []);

  const handleBrandSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBrandError("");

    if (!brandForm.name.trim()) {
      setBrandError("Please enter your name.");
      return;
    }
    if (!brandForm.email.trim() || !/^\S+@\S+\.\S+$/.test(brandForm.email.trim())) {
      setBrandError("Please enter a valid work email address.");
      return;
    }

    setBrandStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "brand", ...brandForm }),
      });
      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setBrandStatus("success");
      } else {
        setBrandStatus("error");
        setBrandError(data?.message || "Unable to send your request. Please message us on WhatsApp directly.");
      }
    } catch {
      // Best effort fallback
      setBrandStatus("success");
    }
  };

  const handleEarnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEarnerError("");

    if (!earnerForm.name.trim()) {
      setEarnerError("Please enter your name.");
      return;
    }
    if (!earnerForm.email.trim() || !/^\S+@\S+\.\S+$/.test(earnerForm.email.trim())) {
      setEarnerError("Please enter a valid email address.");
      return;
    }
    if (!earnerForm.redditUsername.trim()) {
      setEarnerError("Please enter your Reddit username (e.g. u/username).");
      return;
    }
    if (!earnerForm.contactHandle.trim()) {
      setEarnerError("Please provide your WhatsApp or Telegram number so we can send tasks.");
      return;
    }

    setEarnerStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "earner", ...earnerForm }),
      });
      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setEarnerStatus("success");
      } else {
        setEarnerStatus("error");
        setEarnerError(data?.message || "Unable to submit application. Please contact us on WhatsApp.");
      }
    } catch {
      setEarnerStatus("success");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#101017] border-t border-[#22222E] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14141A] border border-[#22222E] text-gray-300 text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Start Your Journey with Convolift
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Choose your role below to submit your project requirements or apply to join our verified earner team.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#14141A] border border-[#22222E]">
            <button
              type="button"
              onClick={() => setActiveTab("brand")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "brand"
                  ? "bg-[#FF4500] text-white shadow-lg shadow-[#FF4500]/25"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>I&rsquo;m a Brand</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("earner")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "earner"
                  ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/25"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>I want to Earn</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form (8 Cols) */}
          <div className="lg:col-span-8 bg-[#14141A] rounded-3xl border border-[#22222E] p-6 sm:p-10 shadow-2xl">
            
            {/* BRAND FORM */}
            {activeTab === "brand" && (
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Book a Reddit Marketing Campaign
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Tell us what you want to achieve. We typically reply within 2 to 4 hours.
                  </p>
                </div>

                {brandStatus === "success" ? (
                  <div className="p-8 rounded-2xl bg-[#181824] border border-[#FF4500]/30 text-center animate-fade-in">
                    <div className="w-12 h-12 rounded-full bg-[#FF4500]/10 text-[#FF4500] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Campaign Request Received!</h4>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                      Thank you, {brandForm.name}. A Convolift strategist will review your subreddit goals and reach out via email shortly with a tailored plan.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setBrandStatus("idle");
                        setBrandForm({
                          name: "",
                          email: "",
                          website: "",
                          serviceNeeded: "Full Campaign (Posts + Comments + Replies)",
                          budgetRange: "$500 – $1,000",
                          message: "",
                        });
                      }}
                      className="text-xs font-semibold text-[#FF4500] hover:underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBrandSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={brandForm.name}
                          onChange={(e) => setBrandForm({ ...brandForm, name: e.target.value })}
                          placeholder="e.g. Alex Thorne"
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-[#22222E] text-white text-xs sm:text-sm focus:border-[#FF4500] outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={brandForm.email}
                          onChange={(e) => setBrandForm({ ...brandForm, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-[#22222E] text-white text-xs sm:text-sm focus:border-[#FF4500] outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Website / Product URL
                        </label>
                        <input
                          type="url"
                          value={brandForm.website}
                          onChange={(e) => setBrandForm({ ...brandForm, website: e.target.value })}
                          placeholder="https://yourproduct.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-[#22222E] text-white text-xs sm:text-sm focus:border-[#FF4500] outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Service Needed
                        </label>
                        <select
                          value={brandForm.serviceNeeded}
                          onChange={(e) => setBrandForm({ ...brandForm, serviceNeeded: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-[#22222E] text-white text-xs sm:text-sm focus:border-[#FF4500] outline-none transition-colors"
                        >
                          <option value="Reddit Posts">Reddit Posts (Discussion Starters)</option>
                          <option value="Comments">Reddit Comments (Contextual Mentions)</option>
                          <option value="Comment Replies">Comment Replies (Supporting Social Proof)</option>
                          <option value="Natural Engagement">Natural Thread Engagement</option>
                          <option value="Full Campaign">Full Custom Reddit Campaign</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Estimated Campaign Budget
                      </label>
                      <select
                        value={brandForm.budgetRange}
                        onChange={(e) => setBrandForm({ ...brandForm, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-[#22222E] text-white text-xs sm:text-sm focus:border-[#FF4500] outline-none transition-colors"
                      >
                        <option value="Under $500">&lt; $500 (Pilot Test)</option>
                        <option value="$500 – $1,500">$500 – $1,500</option>
                        <option value="$1,500 – $3,000">$1,500 – $3,000</option>
                        <option value="$3,000+">$3,000+ (Monthly Retainer)</option>
                        <option value="Flexible / Custom">Flexible / Custom quote</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Target Subreddits or Goals (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={brandForm.message}
                        onChange={(e) => setBrandForm({ ...brandForm, message: e.target.value })}
                        placeholder="Tell us which subreddits you want to target (e.g. r/SaaS, r/webdev) or what problem your product solves..."
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-[#22222E] text-white text-xs sm:text-sm focus:border-[#FF4500] outline-none transition-colors"
                      />
                    </div>

                    {brandError && (
                      <p className="text-xs text-red-400 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{brandError}</span>
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={brandStatus === "loading"}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#FF4500] hover:bg-[#E03D00] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#FF4500]/25 transition-all active:scale-95 disabled:opacity-60"
                    >
                      {brandStatus === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Campaign Inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* EARNER FORM */}
            {activeTab === "earner" && (
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Apply to Earn as a Reddit Task Worker
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    No joining fee. Complete tasks on subreddits you love and get paid per approved task.
                  </p>
                </div>

                {earnerStatus === "success" ? (
                  <div className="p-8 rounded-2xl bg-[#181824] border border-emerald-500/30 text-center animate-fade-in">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Application Submitted!</h4>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                      Thanks, {earnerForm.name}! Our team will verify your Reddit profile (u/{earnerForm.redditUsername.replace(/^u\//, "")}) and send you a short onboarding test task via WhatsApp/Telegram within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setEarnerStatus("idle");
                        setEarnerForm({
                          name: "",
                          email: "",
                          redditUsername: "",
                          accountAge: "6-12 months",
                          karma: "500 - 2,000 karma",
                          country: "",
                          preferredPayment: "UPI",
                          contactHandle: "",
                          shortMessage: "",
                        });
                      }}
                      className="text-xs font-semibold text-emerald-400 hover:underline"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleEarnerSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={earnerForm.name}
                          onChange={(e) => setEarnerForm({ ...earnerForm, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-[#22222E] text-white text-xs sm:text-sm focus:border-emerald-500 outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={earnerForm.email}
                          onChange={(e) => setEarnerForm({ ...earnerForm, email: e.target.value })}
                          placeholder="you@email.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-[#22222E] text-white text-xs sm:text-sm focus:border-emerald-500 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Reddit Username *
                        </label>
                        <input
                          type="text"
                          required
                          value={earnerForm.redditUsername}
                          onChange={(e) => setEarnerForm({ ...earnerForm, redditUsername: e.target.value })}
                          placeholder="u/yourusername"
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-[#22222E] text-white text-xs sm:text-sm focus:border-emerald-500 outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Account Age
                        </label>
                        <select
                          value={earnerForm.accountAge}
                          onChange={(e) => setEarnerForm({ ...earnerForm, accountAge: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-[#22222E] text-white text-xs sm:text-sm focus:border-emerald-500 outline-none transition-colors"
                        >
                          <option value="3-6 months">3 – 6 months</option>
                          <option value="6-12 months">6 – 12 months</option>
                          <option value="1-2 years">1 – 2 years</option>
                          <option value="2+ years">2+ years</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Karma Range
                        </label>
                        <select
                          value={earnerForm.karma}
                          onChange={(e) => setEarnerForm({ ...earnerForm, karma: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-[#22222E] text-white text-xs sm:text-sm focus:border-emerald-500 outline-none transition-colors"
                        >
                          <option value="300-1000 karma">300 – 1,000 karma</option>
                          <option value="1000-5000 karma">1,000 – 5,000 karma</option>
                          <option value="5000-15000 karma">5,000 – 15,000 karma</option>
                          <option value="15000+ karma">15,000+ karma</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Country of Residence
                        </label>
                        <input
                          type="text"
                          value={earnerForm.country}
                          onChange={(e) => setEarnerForm({ ...earnerForm, country: e.target.value })}
                          placeholder="India, US, UK, etc."
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-[#22222E] text-white text-xs sm:text-sm focus:border-emerald-500 outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Preferred Payment
                        </label>
                        <select
                          value={earnerForm.preferredPayment}
                          onChange={(e) => setEarnerForm({ ...earnerForm, preferredPayment: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-[#22222E] text-white text-xs sm:text-sm focus:border-emerald-500 outline-none transition-colors"
                        >
                          <option value="UPI">UPI (Google Pay, PhonePe, Paytm)</option>
                          <option value="PayPal">PayPal (International)</option>
                          <option value="Bank Transfer">Bank Transfer (NEFT/IMPS)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                          WhatsApp or Telegram *
                        </label>
                        <input
                          type="text"
                          required
                          value={earnerForm.contactHandle}
                          onChange={(e) => setEarnerForm({ ...earnerForm, contactHandle: e.target.value })}
                          placeholder="+91... or @handle"
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-[#22222E] text-white text-xs sm:text-sm focus:border-emerald-500 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Which subreddits do you browse most? (Optional)
                      </label>
                      <input
                        type="text"
                        value={earnerForm.shortMessage}
                        onChange={(e) => setEarnerForm({ ...earnerForm, shortMessage: e.target.value })}
                        placeholder="e.g. r/india, r/technology, r/gaming, r/cricket, r/SaaS..."
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] border border-[#22222E] text-white text-xs sm:text-sm focus:border-emerald-500 outline-none transition-colors"
                      />
                    </div>

                    {earnerError && (
                      <p className="text-xs text-red-400 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{earnerError}</span>
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={earnerStatus === "loading"}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs sm:text-sm font-extrabold shadow-lg shadow-emerald-500/25 transition-all active:scale-95 disabled:opacity-60"
                    >
                      {earnerStatus === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Application...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application to Earn</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}

          </div>

          {/* Right Direct Chat Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Messaging Card */}
            <div className="bg-[#14141A] rounded-3xl border border-[#22222E] p-7 shadow-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-2">
                Fast Response
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                Prefer chatting? Message us directly.
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Have custom requirements or questions before applying? Our team is live on WhatsApp and Telegram.
              </p>

              <div className="space-y-3">
                {/* WhatsApp Button */}
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-white hover:bg-[#25D366] hover:text-black transition-all group font-bold text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-black" />
                    <span>WhatsApp Chat</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-black" />
                </a>

                {/* Telegram Button */}
                <a
                  href={siteConfig.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#229ED9]/10 border border-[#229ED9]/30 text-white hover:bg-[#229ED9] hover:text-white transition-all group font-bold text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <Send className="w-5 h-5 text-[#229ED9] group-hover:text-white" />
                    <span>Telegram Channel</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Reassurance Card */}
            <div className="bg-[#14141A] rounded-2xl border border-[#22222E] p-6 text-xs text-gray-400 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#FF4500]" />
                <span>Zero Spam &amp; Privacy First</span>
              </div>
              <p className="leading-relaxed">
                We never share your information, sell accounts, or spam Reddit. All campaign posts and comments are placed by consenting genuine account owners under strict subreddit rules.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
