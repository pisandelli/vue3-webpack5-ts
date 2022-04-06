const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: './src/@types/auto-imports.d.ts',
      }),

      Components({
        dirs: ['src/components'],
        dts: './src/@types/components.d.ts',
      }),
    ],
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: ['./src/assets/stylus/abstracts/*.styl'],
    },
  },
};
