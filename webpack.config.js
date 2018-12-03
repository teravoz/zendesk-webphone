/* global __dirname */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack'); 


var plugins = [
    new ExtractTextPlugin('app.css', {
        allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: 'app/templates/index.html'
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'ZAFClient',
          entry: 'https://assets.zendesk.com/apps/sdk/2.0/zaf_sdk.js',
          global: 'ZAFClient',
        },
      ]
    }),
    new Dotenv()
];

module.exports = (env) => {
  const isProduction = env && !!env.production;

  return {
    mode: isProduction ? 'production' : 'development',
    entry: path.resolve(path.resolve(__dirname, 'src'), 'app.js'),
    output: {
        path: path.resolve(__dirname, 'app/assets'),
        filename: 'bundle.js'
    },
    plugins: plugins,
    module: {
      rules: [
        {
          test: [
            /\.bmp$/, 
            /\.gif$/, 
            /\.jpe?g$/, 
            /\.png$/,  
            /\.svg$/,
            /\.woff$/,
            /\.woff2$/,
            /\.eot$/,
            /\.ttf$/,
          ],
          loader: require.resolve('url-loader'),
          options: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
        {
          test: /\.(js|jsx|mjs)$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                  '@babel/plugin-proposal-class-properties',
                ]
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [ 'css-loader' ]
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  sourceMap: true,
                  importLoaders: 2,
                  localIdentName: '[local]___[hash:base64:5]'
                }
              },
            'sass-loader'
            ]
          })
        }
      ]
    },
    stats: {
      colors: true
    },
    node: {
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    },
    performance: {
      hints: false,
    },
  };
};