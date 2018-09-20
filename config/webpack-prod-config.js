const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
    path: paths.appBuild,
    // publicPath: "/assets/"
  },
  plugins: [
    new ManifestPlugin(),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new ExtractTextPlugin("styles.css"),
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
        // include: path.resolve(paths.appSrc),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react"]
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                discardDuplicates: true,
                sourceMap: false,
                // This enables local scoped CSS based in CSS Modules spec
                modules: true,
                // generates a unique name for each class (e.g. app__app___2x3cr)
                localIdentName: "[name]__[local]___[hash:base64:5]"
              }
            }
            // Add additional loaders here. (e.g. sass-loader)
          ]
        })
      }
    ]
  }
});