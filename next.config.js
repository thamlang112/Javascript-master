/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  output: 'standalone', // giúp Vercel build tốt hơn
}

module.exports = nextConfig;
