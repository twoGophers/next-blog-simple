/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig


module.exports = {
  env: {
    API_URL: 'https://jsonplaceholder.typicode.com'
  }
}