const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'static.ankama.com',
      },
      {
        protocol: 'https',
        hostname: 'www.waven-game.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/bNM3DvVCJk',
        permanent: true,
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)
