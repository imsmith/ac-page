const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
//   images: {
//     loader: 'custom',
//     domains: ['unsplash.com', 'images.unsplash.com', 'f5.sharepoint.com'],
//   },
//   assetPrefix: '',
// };

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: '@mdx-js/react',
  },
});

module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    loader: 'custom',
    domains: ['unsplash.com', 'images.unsplash.com', 'f5.sharepoint.com'],
  },
  assetPrefix: '',
});
