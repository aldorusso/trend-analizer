import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',
  
  // Experimental features for better performance
  experimental: {
    // Optimize server components
    serverComponentsExternalPackages: ['prisma', '@prisma/client'],
  },
  
  // Image optimization config for Docker
  images: {
    domains: ['localhost', 'freepik.com'],
    unoptimized: process.env.NODE_ENV === 'development'
  },
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
