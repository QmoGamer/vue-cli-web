module.exports = {
  lintOnSave: 'warning',
  configureWebpack: {
    devtool: 'cheap-module-eval-source-map',
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/css/variables.scss";',
      },
    },
    sourceMap: true,
  },
};
