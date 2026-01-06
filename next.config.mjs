/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.etimg.com',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
