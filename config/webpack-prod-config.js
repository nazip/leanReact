const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const paths = require('./paths');
const common = require('./webpack-common-config.js');

module.exports = merge(common, {
  mode: "production",

  entry: {
    app: paths.appIndexJs
  },

  output: {
    filename: "[chunkhash]_[name].js",
    path: paths.appOutputProd,
    publicPath: "/production/"
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }	
  },  

  plugins: [
    new ManifestPlugin(),
    new UglifyJSPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new CleanWebpackPlugin([paths.appBuild])
  ],

  module: {
    rules: [
        {
            test: /\.js/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
        },
        {
            test: /\.css/,
            use: [
              { loader: MiniCssExtractPlugin.loader },
              { loader: "css-loader" }
            ]
        }              
    ]
  }

});