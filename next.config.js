/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return {
      beforeFiles: [
        // Arabic default — bare paths map to /ar/...
        { source: "/", destination: "/ar" },
        { source: "/about", destination: "/ar/about" },
        { source: "/the-program", destination: "/ar/the-program" },
      ],
    };
  },
};

module.exports = nextConfig;
