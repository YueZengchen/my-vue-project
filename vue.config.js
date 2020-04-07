'use strict';
const path = require('path');
const defaultSettings = require('./src/settings.js');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = defaultSettings.title || 'yzc Vue Project'; // page title

const port = process.env.port || process.env.npm_config_port || 4321;

/*
  这是一份vue.config.js配置文件&配置教程 这里也建议直接查看官方文档学习
  官方文档链接 https://cli.vuejs.org/zh/config/
*/
module.exports = {
  /*
  default:'/' baseUrl 已弃用
  默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  ，例如 https://www.my-app.com/。如果应用被部署在一个子路径上，
  你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在
  https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/
  */
  publicPath: '/',

  // default:'dist' 生产环境构建文件的目录
  outputDir: 'dist',

  // default:'dist' 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',

  // default:'index.html' 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',

  // default: true 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
  filenameHashing: true,

  // default: true 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。
  lintOnSave: true,

  // default: true 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,

  // type: Object || Function 调整 webpack 配置最简单的方式就是在 vue.config.js 中的 configureWebpack 选项提供一个对象
  configureWebpack: {
    name: name,
    // @指向src目录
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    config.when(process.env.NODE_ENV !== 'development',
      config => {
        config
          .plugin('ScriptExtHtmlWebpackPlugin')
          .after('html')
          .use('script-ext-html-webpack-plugin', [{
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }])
          .end();
        config
          .optimization.splitChunks({
            chunks: 'all',
            cacheGroups: {
              libs: {
                name: 'chunk-libs',
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: 'initial' // only package third parties that are initially dependent
              },
              elementUI: {
                name: 'chunk-elementUI', // split elementUI into a single package
                priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
              },
              commons: {
                name: 'chunk-commons',
                test: resolve('src/components'), // can customize your rules
                minChunks: 3, //  minimum common number
                priority: 5,
                reuseExistingChunk: true
              }
            }
          });
        config.optimization.runtimeChunk('single');
      }
    );
  },
  css: {
    // type: boolean || Object default: 生产环境下true,开发环境下false
    extract: process.env.NODE_ENV === 'production',

    // default: false
    sourceMap: false

  },
  // type Object
  devServer: {
    // api请求代理
    // proxy: {

    // },
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  }

};
