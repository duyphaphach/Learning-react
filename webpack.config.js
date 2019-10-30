const webpack = require('webpack');
const {resolve} = require('path');

const BUILD_DIR = resolve('build');
const APP_DIR = resolve('src');
const PUBLIC_DIR = resolve('public');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [
    'react-hot-loader/patch',
    `${APP_DIR}/index.js`
  ],
  output: {
    path: BUILD_DIR,
    filename: 'main.[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Learn react',
      filename: `${BUILD_DIR}/index.html`,
      template: `${BUILD_DIR}/index.html`,
    })
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    contentBase: './build'
  }
};

module.exports = config;
