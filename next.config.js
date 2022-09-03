/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/nextjs-pages",
  assetPrefix: "/nextjs-pages"
}

module.exports = nextConfig


module.exports = {
  env: {
    API_URL: 'https://jsonplaceholder.typicode.com'
  }
}