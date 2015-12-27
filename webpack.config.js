module.exports = {
  entry: './src/SimpleSlice.jsx',

  output: {
    filename: 'simple-slice.js',
    path: __dirname
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx?$)/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
