const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',  

  entry: {
    bundle:  './src/index.js'
  },
 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: '/assets/'
  },
 
  resolve: {
    alias: {
        '~': process.cwd() 
    }
  },

  devServer: {
    historyApiFallback: true,
    contentBase: path.join(process.cwd(), 'public/assets'),
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
    new ManifestPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new CleanWebpackPlugin(['public/assets/']),
    // new HtmlWebpackPlugin({
    //    title: 'Development'
    // })    
  ]
};