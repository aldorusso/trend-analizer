import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',
  
  // External packages for server components
  serverExternalPackages: ['prisma', '@prisma/client'],
  
  // Image optimization config for Docker
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'freepik.com',
      },
      {
        protocol: 'https',
        hostname: '*.freepik.com',
      }
    ],
    unoptimized: process.env.NODE_ENV === 'development'
  },
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
