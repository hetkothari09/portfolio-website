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
    unoptimized: true,
  },
  experimental: {
    optimizeCss: {
      inlineThreshold: 0,
      pruneThreshold: 0,
    },
    scrollRestoration: true,
  },
  // Adding security headers to allow Sketchfab iframe
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://sketchfab.com; frame-src 'self' https://sketchfab.com; child-src 'self' https://sketchfab.com;"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig; 