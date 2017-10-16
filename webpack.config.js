const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
  entry: ['./main.js', './main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.js",
    publicPath: '/'
  },
  module: {
    rules: [
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    },
    {
      test: /\.html$/,
      loader: 'html-loader'
    }
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin({
      filename:'./index.css',
    }),
    new HtmlWebpackPlugin({
      title: 'Insert Your Arbitrary Title Here',
      filename: 'index.html',
      template: 'main.html',
      minify: {}
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        { path: 'https://fonts.googleapis.com/css?family=Open+Sans', type: 'css' },
        { path: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', type: 'css'}
      ],
      append: true
    }),
    new OptimizeCssAssetsPlugin()
  ]
}