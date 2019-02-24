const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const pathResolve = pathEntry => path.resolve(__dirname, pathEntry);

module.exports = {
  ...(isProduction
    ? {
        mode: 'production',
        devtool: 'source-map',
        performance: {
          hints: 'warning',
        },
      }
    : {
        mode: 'development',
        devtool: 'eval',
        devServer: {
          contentBase: pathResolve('./dist'),
          hot: true,
          historyApiFallback: true,
          disableHostCheck: true,
          host: '0.0.0.0',
          port: process.env.PORT || '8080',
        },
      }),
  entry: isProduction
    ? ['@babel/polyfill', './src/index.tsx']
    : ['@babel/polyfill', 'preact/debug', './src/index.tsx'],
  output: {
    path: pathResolve('./dist'),
    filename: isProduction ? '[name]-[contenthash].js' : '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'package-core': pathResolve('../package-core/src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: Object.assign(
              {
                modules: true,
                importLoaders: 1,
              },
              isProduction
                ? {}
                : {
                    localIdentName: '[name]__[local]--[hash:base64:5]',
                  },
            ),
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [require('postcss-preset-env')()],
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        include: [pathResolve('../package-core/src'), pathResolve('./src')],
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(require('./webpack.environment.json')),
    new MiniCssExtractPlugin(
      isProduction
        ? {
            filename: '[name]-[contenthash].css',
            chunkFilename: '[id]-[contenthash].css',
          }
        : {},
    ),
    new HtmlWebpackPlugin(),
    ...(isProduction ? [] : [new webpack.HotModuleReplacementPlugin()]),
  ],
  optimization: isProduction
    ? {
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              chunks: 'all',
            },
          },
        },
        minimizer: [
          new TerserWebpackPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
            terserOptions: {
              compress: {
                drop_console: true,
                dead_code: true,
              },
            },
          }),
          new OptimizeCSSAssetsPlugin({}),
        ],
      }
    : {},
};
