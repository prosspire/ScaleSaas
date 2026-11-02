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
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'miajmerfkgayimdhfnpy.supabase.co',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/tooling/appsonair',
        destination: 'https://droponair.saasscale.in',
        permanent: true,
      },
      {
        source: '/tooling/appsonair/:path*',
        destination: 'https://droponair.saasscale.in/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
