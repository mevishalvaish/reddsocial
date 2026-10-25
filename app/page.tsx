import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyReddSocial } from "@/components/WhyReddSocial";
import { HowItWorks } from "@/components/HowItWorks";
import { SignupSection } from "@/components/SignupSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Navigation bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2 & 3. Hero Section & Community Conversation Illustration */}
        <Hero />

        {/* 4. Upcoming Services Section */}
        <Services />

        {/* 5. Why ReddSocial Section */}
        <WhyReddSocial />

        {/* 6. How It Works Section */}
        <HowItWorks />

        {/* 7. Email Signup Section */}
        <SignupSection />

        {/* 8. Final Call to Action */}
        <FinalCTA />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
