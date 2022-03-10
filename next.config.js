/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    AUTH_URL: process.env.AUTH_URL,
    MONGO_URL: process.env.MONGO_URL,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "secret",
    secondSecret: process.env.ACCESS_TOKEN_SECRET, // Pass through env variables
  },
  images: {
    domains: ["localhost", "is4.revolveassets.com"],
  },
};

module.exports = nextConfig;
