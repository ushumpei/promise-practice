module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname + '/app/static',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader:  'babel',
        query: {
          presets: [
            'es2015',
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
    ]
  },
}
