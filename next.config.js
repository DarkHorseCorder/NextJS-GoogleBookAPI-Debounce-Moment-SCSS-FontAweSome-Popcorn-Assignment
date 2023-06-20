/** @type {import('next').NextConfig} */
// const debug = process.env.NODE_ENV !== 'production'
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiUrl: 'https://www.googleapis.com/books/v1',
  },
  // assetPrefix: !debug ? '/google-books/' : ''
}

module.exports = nextConfig
