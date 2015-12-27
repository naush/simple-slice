module.exports = {
  entry: './entry.js',

  output: {
    filename: 'index.js',
    path: __dirname
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx?$)/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
