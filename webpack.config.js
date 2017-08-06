var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
    stats: 'errors-only',
  },
  devtool: 'sourcemap',
  entry: [
    './app/index.js',
    'webpack-hot-middleware/client'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Up&Up',
      template: 'index.temp.ejs',
      inject: 'body'
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.css$/,
        loaders: ['style-loader','css-loader','postcss-loader']
      },
      {
        include: /\.json$/,
        loaders: ["json-loader"]
      }
    ]
  },
};
