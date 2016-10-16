const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var cssExtractTextPlugin = new ExtractTextPlugin('[name].css');

const PATHS = {
  build: path.join(__dirname, 'build/js')
};

module.exports = {
  entry: { 
    'script': ['babel-polyfill', './docs/js/main.js'],
    'style': './docs/less/agency.less'
  },
  //entry: [ './docs/js/main.js', './docs/less/agency.less'],
  // output: {
  //   path : PATHS.build,
  //   filename: "bundle.js"
  // },
  watch: true,
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
    {
      test: /\.es6$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ['es2015', 'stage-3']
      }
    }, 
    { 
      test: /\.(ttf.*|eot.*|woff.*|ogg|mp3|html)$/, 
      loader: 'file-loader'
    },
    //{ test: /.(png|jpe?g|gif|svg.*)$/, loader: 'file-loader!img-loader?optimizationLevel=7&progressive=true'},
    { 
      test: /.(png|jpe?g|gif|svg.*)$/, 
      loader: 'file-loader!img-loader'
    },
    {
      test: /\.less$/,
      loader: cssExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
    },
    {
      test : /\-tpl.hbs$/,
      loader :  'handlebars'
    }
    ]
  },
  resolve: {
    //for omission file extension (import * from 'here';)
    extensions: ["", ".js", ".es6", ".hbs"] 
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    cssExtractTextPlugin,
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     }
    // })
  ]
}
