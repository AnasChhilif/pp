/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Use static export
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable server-side features
  experimental: {
    serverActions: false,
  },
}

module.exports = nextConfig

