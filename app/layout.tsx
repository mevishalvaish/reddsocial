import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://convolift.com";

export const viewport: Viewport = {
  themeColor: "#FF4500",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ConvoLift — Turn Conversations Into Growth | Reddit Marketing Agency",
  description:
    "Get your brand noticed where conversations happen. ConvoLift helps businesses reach relevant Reddit communities through posts, comments, and upvote services, helping you reach more users, attract potential customers, and improve your brand’s visibility across LLMs and AI-powered search.",
  keywords: [
    "ConvoLift",
    "Turn Conversations Into Growth",
    "Reddit Marketing Agency",
    "Reddit Thread Posting",
    "Reddit Comments",
    "Reddit Upvotes",
    "Reddit Growth",
    "LLM Visibility",
    "AI Search Optimization",
    "Subreddit Marketing",
    "Reddit Publishers Network",
  ],
  authors: [{ name: "ConvoLift", url: siteUrl }],
  creator: "ConvoLift",
  publisher: "ConvoLift",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "ConvoLift — Turn Conversations Into Growth",
    description:
      "Turn authentic Reddit discussions into sustainable organic growth through thread posts, high-intent comments, and manual upvote amplification.",
    url: siteUrl,
    siteName: "ConvoLift",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ConvoLift — Turn Conversations Into Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ConvoLift — Turn Conversations Into Growth",
    description:
      "Turn authentic Reddit discussions into sustainable organic growth through thread posts, high-intent comments, and manual upvote amplification.",
    creator: "@convolift",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans min-h-screen bg-white text-[#1A1A1B] antialiased selection:bg-[#FFF0E9] selection:text-[#FF4500]">
        {children}
      </body>
    </html>
  );
}
