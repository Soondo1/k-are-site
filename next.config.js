/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static HTML export
  images: {
    unoptimized: true,  // Required for static export
    domains: [
      'cdn.sanity.io',
      'source.unsplash.com',
      'images.unsplash.com'
    ],
  },
  // Required if you deploy to GitHub Pages as a project site (username.github.io/repo-name)
  basePath: process.env.NODE_ENV === 'production' ? '/k-are' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/k-are' : '',
  
  // Other configurations...
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;