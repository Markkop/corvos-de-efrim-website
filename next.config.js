const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/bNM3DvVCJk',
        permanent: true,
      },
    ]
  }
}

module.exports = withContentlayer(nextConfig)

