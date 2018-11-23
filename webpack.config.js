/* global __dirname */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const environment = process.env.env
const isProductionBuild = process.env.env === 'prod'

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
          module: 'Teravoz',
          entry: 'https://cdn.teravoz.com.br/webrtc/v1/teravoz-webrtc.js',
          global: 'Teravoz',
        },
        {
          module: 'ZAFClient',
          entry: 'https://assets.zendesk.com/apps/sdk/2.0/zaf_sdk.js',
          global: 'ZAFClient',
        },
      ]
    })
];

if(isProductionBuild) {
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }))
    plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = {
    entry: path.resolve(path.resolve(__dirname, 'src'), 'app.js'),
    output: {
        path: path.resolve(__dirname, 'app/assets'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.(js|jsx)$/,
                query: {
                    plugins: ['transform-decorators-legacy', 'transform-object-rest-spread'],
                    presets: ['es2015', 'react'],
                },
            },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') },
        ]
    },
    plugins: plugins,
    stats: {
        colors: true
    },
    devtool: isProductionBuild ? undefined : 'source-map',
};
