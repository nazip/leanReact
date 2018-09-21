const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const paths = require('./paths');
const merge = require("webpack-merge");
const common = require("./webpack-common-config.js");

module.exports = merge(common, {
  mode: 'development',  

  entry: {
    bundle:  './src/index.js'
  },
 
  output: {
    filename: 'bundle.js',
    path: paths.appOutputDev,
    publicPath: '/assets/'
  },
   
  devServer: {
    historyApiFallback: true,
    hot: true  
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
        },
        {
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
        }              
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin([paths.appOutputDev],{
      root: paths.appRoot,
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
       title: 'Development',
       template: paths.appDevHtmlTemplate
    })    
  ]
});