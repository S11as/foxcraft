const path = require('path')

module.exports = {
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/sass/global.module.sass"'
      },
      css: {
        modules: {
          localIdentName: '[local]-[hash:base64:5]'
        },
        localsConvention: 'dashesOnly'
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('Lib', path.resolve(__dirname, 'src/components/lib/'))
      .set('Assets', path.resolve(__dirname, 'src/assets/'))
      .set('Config', path.resolve(__dirname, 'config/'))
      .set('Store', path.resolve(__dirname, 'src/store/'))
      .set('Sass', path.resolve(__dirname, 'src/styles/sass/'))
      .set('Icons', path.resolve(__dirname, 'src/assets/icons/'))
  }
}
