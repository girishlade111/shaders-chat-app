/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages hosting.
  // Remove `basePath` when deploying to a domain root (Vercel / custom domain).
  output: 'export',
  basePath: '/shaders-chat-app',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig