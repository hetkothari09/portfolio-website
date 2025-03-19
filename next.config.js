/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    unoptimized: process.env.NODE_ENV === 'development',
  },
  experimental: {
    optimizeCss: {
      inlineThreshold: 0,
      pruneThreshold: 0,
    },
    scrollRestoration: true,
  },
};

module.exports = nextConfig; 