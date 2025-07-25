import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
      {
        protocol: 'https',
        hostname: 'aceternity.com',
      },
        {
        protocol: 'https',
        hostname: 'owerrlaobwdowecvbfgk.supabase.co',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
