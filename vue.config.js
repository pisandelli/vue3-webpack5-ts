const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@styles': path.join(__dirname, './src/assets/stylus/'),
      },
      extensions: ['.js', '.vue', '.styl', '.stylus', '.json'],
    },
    plugins: [
      // https://github.com/antfu/unplugin-auto-import
      // https://vueuse.org/
      AutoImport({
        imports: ['vue', 'vue-router', 'vuex', '@vueuse/head', '@vueuse/core'],
        dts: true,
      }),

      Components({
        dirs: ['src/components'],
        dts: true,
      }),
    ],
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: ['./src/assets/stylus/abstracts/*.styl'],
    },
  },
}
