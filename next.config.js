/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://whale-log.herokuapp.com/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
