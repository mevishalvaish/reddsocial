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
  title: "ReddSocial | Reddit Marketing Agency — Make Every Conversation Count",
  description:
    "ReddSocial helps businesses build a stronger presence on Reddit through strategic content, meaningful community engagement, research, and data-driven marketing.",
  keywords: [
    "Reddit Marketing Agency",
    "Reddit Marketing",
    "Reddit Advertising",
    "Community Management",
    "Subreddit Research",
    "Brand Monitoring",
    "Reddit SEO",
    "Organic Reddit Growth",
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
    title: "ReddSocial | Reddit Marketing Agency",
    description:
      "Your Brand Belongs in the Conversation. Strategic Reddit marketing, community management, and data-driven growth.",
    url: siteUrl,
    siteName: "ReddSocial",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ReddSocial - Make Every Conversation Count",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReddSocial | Reddit Marketing Agency",
    description:
      "Your Brand Belongs in the Conversation. Strategic Reddit marketing, community management, and data-driven growth.",
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
