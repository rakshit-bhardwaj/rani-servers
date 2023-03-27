/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['imgur.com'],
  },
  
}

module.exports = nextConfig
