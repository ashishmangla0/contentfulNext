const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/',
    sw: 'service-worker.js'
  },
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/cagsn/image/upload/',
  },
})