module.exports = {
  target: "serverless",
  trailingSlash: false,
  webpack: (config, { webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
    // Important: return the modified config
    return config
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
}
