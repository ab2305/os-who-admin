const axiosConfig = require('config').get('axios')
const BabiliPlugin = require('babili-webpack-plugin')

module.exports = {
  modules: [
    '@nuxtjs/axios',
  ],
  plugins: [
    '~/plugins/element-ui',
    '~/plugins/vue-moment',

    '~/plugins/filters',
  ],

  head: {
    title: '누굴까 관리자',
    meta: [
      { charset: 'utf-8' },
    ],
  },
  css: [
    'element-ui/lib/theme-default/index.css',
    '~/assets/element-customized.scss',
    '~/assets/main.scss',
  ],
  loading: {
    color: '#20a0ff',
  },
  loadingIndicator: {
    color: '#20a0ff',
  },

  mode: 'spa', // TODO: Remove after issue #30 is fixed.
  build: {
    extractCSS: true,
    cssSourceMap: true,
    extend: (config, context) => {
      config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin')
      config.plugins.push(new BabiliPlugin())
      if (context.dev && context.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          options: {
            fix: context.dev,
            emitWarning: context.dev,
          },
          exclude: /(node_modules)/,
        })
      }
    },
    vendor: [
      'element-ui',
      'vue-moment',
    ],
  },

  axios: axiosConfig,
}
