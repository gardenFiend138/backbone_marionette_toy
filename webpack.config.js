var webpack = require('webpack');

module.exports = {
  entry: './app/driver.js',
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'underscore-template-loader'
      },
      {
        test: /\.(es6|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
    ]
  },
  output: {
    path: __dirname + '/static/js',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'underscore'
    })
  ],
  resolve: {
    modules: [__dirname + '/node_modules', __dirname + '/app']
  },
  resolveLoader: {
    modules: [__dirname + '/node_modules']
  }
};
