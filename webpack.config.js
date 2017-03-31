const path = require('path');


module.exports = {

  entry: path.join(__dirname, '/client/src/app.js'),

  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

 resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },

  watch: true
};