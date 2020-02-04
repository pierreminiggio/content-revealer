const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')

module.exports = {
  entry: {
    'main': './src/js/main.js',
    'ContentRevealer': './src/js/ContentRevealer.js',
    'demo': './src/js/demo.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    library: "OrderableFileManager",
    libraryExport: 'default',
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
      extensions: ['.js']
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new MinifyPlugin({}, {
      test: /\.min\.js$/,
    }),
  ]
};
