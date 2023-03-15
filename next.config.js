/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// const nextConfig = withBundleAnalyzer({
//   reactStrictMode: false,
//   images: {
//     domains: ['avatars.githubusercontent.com', 'media.graphassets.com'],
//   },
// });

const config = withPWA({
  // here goes your Next.js configuration
  reactStrictMode: false,
  images: {
    domains: ['avatars.githubusercontent.com', 'media.graphassets.com'],
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
});

const nextConfig = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching,
  register: true,
  skipWaiting: true,
})(config);

module.exports = nextConfig;
