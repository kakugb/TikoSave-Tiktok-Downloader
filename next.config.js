/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/en', // Redirect root to /en
      },
    ];
  },
  
};

module.exports = nextConfig;