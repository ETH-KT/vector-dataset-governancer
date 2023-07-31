/** @type {import('next').NextConfig} */
const repo = 'vector-dataset-governancer'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.arweave.net",
      },
    ],
    domains: [
      "ipfs.io",
      "ipfs.filebase.io",
      "ipfs.infura.io",
      "nftstorage.link",
      "aptoslabs.com",
      "miro.medium.com",
      "www.gitbook.com",
      "raw.githubusercontent.com",
    ],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
