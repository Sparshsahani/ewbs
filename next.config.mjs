/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'newcrm.ewbsbusiness.ae',
      },
      {
        protocol: 'https',
        hostname: 'api.ewbsbusiness.ae',
      },
    ],
  },
};

export default nextConfig;
