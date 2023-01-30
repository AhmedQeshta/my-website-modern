/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: false,
  images: {
    domains: ['avatars.githubusercontent.com', 'media.graphassets.com'],
  },
});

module.exports = nextConfig;
