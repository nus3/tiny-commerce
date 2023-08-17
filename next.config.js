/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nus3.com',
        pathname: '/images/**'
      }
    ]
  }
};

module.exports = nextConfig;
