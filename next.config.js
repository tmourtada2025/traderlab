/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Rewrites map user-facing paths to internal locale routes.
  // Order: more specific first.
  async rewrites() {
    return {
      beforeFiles: [
        // / → /ar (Arabic homepage at root)
        { source: "/", destination: "/ar" },
        // /about → /ar/about
        { source: "/about", destination: "/ar/about" },
        // /courses/:slug → /ar/courses/:slug
        { source: "/courses/:slug", destination: "/ar/courses/:slug" },
      ],
    };
  },
};

module.exports = nextConfig;
