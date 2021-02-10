const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

const nextConfig = {
  distDir: 'build',
  webpack: (config) => {
    config.plugins.push( new webpack.EnvironmentPlugin(localEnv))
    config.node = {
      fs: 'empty'
    }
    return config
  },
};
 
module.exports = withPlugins([
  [optimizedImages]
], nextConfig);