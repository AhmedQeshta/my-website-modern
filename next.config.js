/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['avatars.githubusercontent.com', 'media.graphassets.com'],
  },
};

module.exports = nextConfig;
