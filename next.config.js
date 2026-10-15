/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    // serve resized AVIF/WebP instead of the original PNGs
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
