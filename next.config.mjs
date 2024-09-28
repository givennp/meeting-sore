/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.meetingsore.com",
      },
    ],
  },
};

export default nextConfig;
