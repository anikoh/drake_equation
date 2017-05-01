
var path = require('path');
// const like var with extra features (ES6)

// looks for entry filenames - starting point
// scans content for requires and imports
// bundles everything to a destination you specify
// that bundle file is what you add with a script tag

const config = {
  entry: {
    // will look for index.js by convention
    app: './app'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,   //regex to match anything that's js
        loader: 'babel-loader',  //converts it with babel-loader
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  devServer: {
    port: 4000
  }
}

module.exports = config;
