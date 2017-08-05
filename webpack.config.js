var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
module.exports = {
  devServer: {
    stats: 'errors-only',
  },
  devtool: 'source-map',
  entry: './app/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Up&Up',
      template: 'index.ejs',
      inject: 'body',
      filename: '../views/index.html'
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: __dirname + '/app'
    },
    {
      test: /\.css$/,
      loaders: ['style-loader','css-loader','postcss-loader']
    },
    {
      include: /\.json$/,
      loaders: ["json-loader"]
    }]
  },
};
