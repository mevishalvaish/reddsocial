import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/contentConfig";

export const viewport: Viewport = {
  themeColor: "#0B0B0F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Convolift | Reddit Marketing Services & Community Earning Platform",
  description:
    "Convolift connects startups and brands with real Reddit discussions through posts, comments, and natural engagement — while empowering genuine Reddit users to earn per approved task.",
  keywords: [
    "Convolift",
    "Reddit Marketing Service",
    "Reddit Posts",
    "Reddit Comments",
    "Comment Marketing",
    "Reddit Upvotes",
    "Earn with Reddit",
    "Reddit Tasks",
    "Subreddit Marketing Agency",
    "B2B Reddit Growth",
  ],
  authors: [{ name: "Convolift", url: siteConfig.siteUrl }],
  creator: "Convolift",
  publisher: "Convolift",
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Convolift | Reddit Marketing, Done Right",
    description:
      "Get your brand noticed, discussed, trusted, and recommended on Reddit with real human accounts and natural conversation delivery.",
    url: siteConfig.siteUrl,
    siteName: "Convolift",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Convolift - Reddit Marketing, Done Right",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convolift | Reddit Marketing, Done Right",
    description:
      "Get your brand noticed, discussed, trusted, and recommended on Reddit with real human accounts and natural conversation delivery.",
    creator: "@convolift",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="font-sans min-h-screen bg-[#0B0B0F] text-[#F3F4F6] antialiased selection:bg-[#FF4500]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
