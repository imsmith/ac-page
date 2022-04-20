const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['unsplash.com', 'images.unsplash.com', 'f5.sharepoint.com'],
  },
  assetPrefix: isProd ? '/ac-page/' : '',
};

module.exports = nextConfig;
