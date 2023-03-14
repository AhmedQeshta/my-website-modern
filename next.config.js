/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

// import withPWA from 'next-pwa';
// import runtimeCaching from 'next-pwa/cache.js';

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  // here goes your Next.js configuration
  reactStrictMode: false,
  images: {
    domains: ['avatars.githubusercontent.com', 'media.graphassets.com'],
  },
};

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// const nextConfig = withBundleAnalyzer({
//   reactStrictMode: false,
//   images: {
//     domains: ['avatars.githubusercontent.com', 'media.graphassets.com'],
//   },
// });

const nextConfig = withPWA({
  dest: 'public',
  disable: !isProduction,
  runtimeCaching,
})(config);

module.exports = nextConfig;
