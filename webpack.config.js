module.exports = {
  entry: './entry.js',

  output: {
    filename: 'simple-slice.js',
    library: 'simplie-slice',
    libraryTarget: 'umd',
    path: __dirname
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
