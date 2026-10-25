import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://reddsocial.com";

export const viewport: Viewport = {
  themeColor: "#FF4500",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ReddSocial | Reddit Marketing & Community Growth",
  description:
    "ReddSocial is preparing to launch. Discover a community-first approach to Reddit marketing, authentic engagement, and audience insights.",
  keywords: [
    "Reddit Marketing",
    "Community Growth",
    "Reddit Agency",
    "Audience Insights",
    "Community Engagement",
    "Organic Growth",
    "Reddit Strategy",
    "Subreddit Marketing",
  ],
  authors: [{ name: "ReddSocial", url: siteUrl }],
  creator: "ReddSocial",
  publisher: "ReddSocial",
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
    title: "ReddSocial | Reddit Marketing & Community Growth",
    description:
      "ReddSocial is preparing to launch. Discover a community-first approach to Reddit marketing, authentic engagement, and audience insights.",
    url: siteUrl,
    siteName: "ReddSocial",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ReddSocial - Be Part of the Conversation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReddSocial | Reddit Marketing & Community Growth",
    description:
      "ReddSocial is preparing to launch. Discover a community-first approach to Reddit marketing, authentic engagement, and audience insights.",
    creator: "@reddsocial",
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
