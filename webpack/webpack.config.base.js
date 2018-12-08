const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './base.js'),
  output: {
    filename: 'base_modules.js',
    path: path.resolve(__dirname, '../dist/basic')
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/
  },]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, '../dist/basic')],{
      root: path.resolve(__dirname, '../'),   //设置root
      verbose: true
    }),
  ]
}
