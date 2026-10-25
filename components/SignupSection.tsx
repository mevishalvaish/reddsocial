"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function SignupSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [clientError, setClientError] = useState("");

  const validateEmail = (val: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(val.trim());
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClientError("");

    const trimmed = email.trim();
    if (!trimmed) {
      setClientError("Please enter your work email address.");
      return;
    }

    if (!validateEmail(trimmed)) {
      setClientError("Please enter a valid email address (e.g., name@company.com).");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setStatus("success");
        setMessage(data.message || "You're on the list! We'll notify you as soon as ReddSocial launches.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data?.message || "Something went wrong. Please check your email and try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network connection error. Please try again in a moment.");
    }
  };

  return (
    <section id="signup" className="py-20 sm:py-28 bg-[#FFF0E9] border-t border-b border-[#FF4500]/15 scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#FF4500]/20 shadow-sm text-center relative overflow-hidden">
          
          {/* Subtle background decoration */}
          <div 
            className="absolute -top-24 -right-24 w-60 h-60 bg-[#FFF0E9] rounded-full blur-3xl opacity-70 pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E9] text-[#FF4500] text-xs font-bold tracking-wider uppercase mb-5">
              <Mail className="w-3.5 h-3.5" />
              <span>Launch Updates</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1B] tracking-tight mb-4">
              Be First to Join the Conversation.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#576F76] leading-relaxed mb-8">
              ReddSocial is on its way. Sign up for launch updates and be among the first to hear about our Reddit marketing services.
            </p>

            {/* Email Form */}
            {status !== "success" ? (
              <form onSubmit={handleSubmit} noValidate className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                  <div className="relative flex-1">
                    <label htmlFor="email-input" className="sr-only">
                      Enter your work email address
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (clientError) setClientError("");
                        if (status !== "idle" && status !== "loading") {
                          setStatus("idle");
                          setMessage("");
                        }
                      }}
                      placeholder="Enter your work email address"
                      disabled={status === "loading"}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#EDEFF1] bg-white text-[#1A1A1B] placeholder-[#576F76]/70 text-sm font-medium focus:border-[#FF4500] focus:ring-2 focus:ring-[#FF4500]/20 transition-all outline-none disabled:bg-[#F6F7F8] disabled:cursor-not-allowed"
                      aria-required="true"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF4500] hover:bg-[#E03D00] text-white font-semibold text-sm shadow-xs transition-all duration-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF4500] shrink-0"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Keep Me Updated</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Client validation error */}
                {clientError && (
                  <p className="mt-2.5 text-xs text-red-600 font-medium flex items-center justify-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{clientError}</span>
                  </p>
                )}

                {/* Provider Error Message */}
                {status === "error" && (
                  <div className="mt-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-left text-xs text-red-700 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Submission Error:</span>
                      <p>{message}</p>
                    </div>
                  </div>
                )}

                {/* Privacy Note */}
                <p className="mt-4 text-xs text-[#576F76]">
                  We&rsquo;ll only use your email to share relevant ReddSocial launch updates.
                </p>
              </form>
            ) : (
              /* Success State */
              <div className="p-8 rounded-2xl bg-[#F6F7F8] border border-[#EDEFF1] max-w-md mx-auto text-center animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#FFF0E9] text-[#FF4500] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1B] mb-2">You&rsquo;re on the list!</h3>
                <p className="text-sm text-[#576F76] leading-relaxed mb-6">
                  {message}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setMessage("");
                  }}
                  className="text-xs font-semibold text-[#FF4500] hover:underline"
                >
                  Register another email
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
