const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const common = require("./webpack-common-config.js");

const root = path.join(process.cwd());
const src = path.join(root, '/src');

module.exports = merge(common, {
  entry: path.join(src, 'index.js'),
  output: {
     filename: 'bundle.js',
     path: path.join(root, '/distr'),
     publicPath: '/assets/'
  },
   mode: "development",
  // devtool option controls if and how source maps are generated.
  // see https://webpack.js.org/configuration/devtool/
  // If you find that you need more control of source map generation,
  // see https://webpack.js.org/plugins/source-map-dev-tool-plugin/
  devtool: "eval",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: src,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react", '@babel/preset-env']
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
  }
});

