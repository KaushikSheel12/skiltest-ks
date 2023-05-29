/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
  unoptimized: true,
    domains: ['https://upload.wikimedia ,https://w7.pngwing.com']
  },
}

module.exports = nextConfig