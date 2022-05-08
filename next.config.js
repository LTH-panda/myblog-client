/** @type {import('next').NextConfig} */

let destination;

if (process.env.NODE_ENV !== "production") {
  destination = "http://localhost:4000/api/:path*";
} else {
  destination = "https://whale-log.herokuapp.com/api/:path*";
}

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination,
      },
    ];
  },
};

module.exports = nextConfig;
