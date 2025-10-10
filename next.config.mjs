/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const isExport = process.env.EXPORT === 'true';

const nextConfig = {
  ...(isExport && { output: 'export' }),
  trailingSlash: true, 
  ...(isExport && { 
    basePath: '/devportfolio', 
    assetPrefix: '/devportfolio/',
  }),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;
