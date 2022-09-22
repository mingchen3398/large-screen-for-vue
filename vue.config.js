const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/scale')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }

})
