import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://convolift.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
