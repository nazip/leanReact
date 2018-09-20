const webpack = require("webpack");
const merge = require("webpack-merge");
// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const paths = require("./paths");
const common = require("./webpack-common-config.js");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  entry: {
    vendor: ["react"],
    app: paths.appIndexJs
  },
  output: {
    filename: "[chunkhash]_[name].js",
    path: paths.appBuild
    // publicPath: "/assets/"
  },
  plugins: [
    new ManifestPlugin(),
    // new UglifyJSPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    
    new CleanWebpackPlugin([paths.appBuild],{
      root: paths.appRoot,
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
       title: 'Production',
       template: paths.appDevHtmlTemplate
    })   
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react"]
          }
        }
      },
      {
        test: /\.(css)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" }
        ]
      }
    ]
  }
});