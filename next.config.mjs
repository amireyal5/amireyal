/** @type {import('next').NextConfig} */
const nextConfig = { output: 'export', images: { unoptimized: true }, 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;
