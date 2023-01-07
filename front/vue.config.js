const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: false,
  },
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    output: {
      filename: 'index.js',
    }
  },
  publicPath: './',
  outputDir: '../dist/',
  filenameHashing: false
})
