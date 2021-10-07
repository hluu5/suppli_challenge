const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ENV_DEV = 'development';
const ENV_PROD = 'production';

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 4000,
    hot: true,
    open: true,
    watchFiles: {
      paths: ['src/*'],
    },
    client: {
      overlay: false,
    },
    historyApiFallback: {
      index: 'index.html',
      rewrites: [
        { from: /^\/*/, to: '/index.html' },
      ],
    },
    proxy: { //forward any api call from port 4000 to proxy server port of 5000
      '/api': {
        target: 'http://localhost:5000',
        secure: false,
      },
    },
  },
  devtool: process.env.environment === ENV_PROD ? '' : 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        resolve: {
          extensions: [".js", ".jsx"]
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        sideEffects: true,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        sideEffects: true,
      },
      {
        test: /\.ejs$/i,
        use: 'raw-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mammoth Finance',
      template: './client/public/index.html',
      filename: 'index.html',
      inject: true
    }),
    new CleanWebpackPlugin({
      verbose: true,
      cleanStaleWebpackAssets: true,
    }),
  ],
};
