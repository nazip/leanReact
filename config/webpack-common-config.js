module.exports = {
  resolve: {
    alias: {
      '~': process.cwd() 
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg)$/,
        use: ["file-loader"]
      }
    ]
  }
};