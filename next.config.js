/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: 'akamai',
    // path: '/',
    domains: ['api.amis-it.by']
  },
  devIndicators: {
    buildActivity: false
  }
}

module.exports = nextConfig
