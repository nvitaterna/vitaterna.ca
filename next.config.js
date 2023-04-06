const withMDX = require('@next/mdx')({
  options: {
    providerImportSource: '@mdx-js/react',
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
    appDir: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = withMDX(nextConfig);
