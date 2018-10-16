const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 8081,
    contentBase: './public'
  },
  watchOptions: {
    ignored: /node_modules/
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: path.join(__dirname, '/node_modules')
    }
  },
  module: {
    rules: [{
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['transform-object-rest-spread']
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
      loader: 'file'
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}
