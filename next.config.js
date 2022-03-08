/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    AUTH_URL: process.env.AUTH_URL,
    MONGO_URL: process.env.MONGO_URL,
  },
};

module.exports = nextConfig;
