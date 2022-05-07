/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://git.heroku.com/whale-log.git/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
