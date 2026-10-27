import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { EarnSection } from "@/components/EarnSection";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyConvoLift } from "@/components/WhyConvoLift";
import { Pricing } from "@/components/Pricing";
import { Results } from "@/components/Results";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-[#F3F4F6] relative overflow-x-hidden">
      {/* 0. Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-grow overflow-x-hidden">
        {/* Hero Section with Dual Audience Sliding Words & Selector */}
        <Hero />

        {/* 1. Trust Bar Stats */}
        <TrustBar />

        {/* 2. Services for Brands */}
        <Services />

        {/* 3. Earn With Convolift for Workers */}
        <EarnSection />

        {/* 4. How It Works (Tabbed: For Brands / For Earners) */}
        <HowItWorks />

        {/* 5. Why Convolift (6 Core Value Pillars) */}
        <WhyConvoLift />

        {/* 6. Pricing Plans for Brands */}
        <Pricing />

        {/* 7. Results & Case Studies */}
        <Results />

        {/* 8. Testimonials (Clients & Earners) */}
        <Testimonials />

        {/* 9. FAQ (Toggle: For Brands / For Earners) */}
        <FAQ />

        {/* 10. Final Dual Side-by-Side CTA */}
        <FinalCTA />

        {/* 11. Dual-Tab Contact & Application Section */}
        <ContactSection />
      </main>

      {/* 12. Footer with Modals and Compliance */}
      <Footer />

      {/* 13. Floating WhatsApp Widget on Every Screen */}
      <FloatingWhatsApp />
    </div>
  );
}
