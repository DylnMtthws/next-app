/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bit.ly",
      },
    ],
  },
  reactServerComponents: {
    use: ["@react-email/tailwind"],
  },
};

module.exports = nextConfig;
