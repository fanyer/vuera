let path = require('path')

module.exports = {
  entry: path.join(__dirname, 'index.js'), //入口
  output: { //出口
    path: path.join(__dirname, '/'),
    filename: 'bundle.js'
  },
  plugins: [
    // new htmlWepackPlugin({
    //   template: path.join(__dirname, '/index.html'),
    //   filename: 'index.html'
    // })
  ],
  devServer:{
      port: 3000,
      hot: true,
      inline: true
  },
  module: {
    rules: [
    //     {
    //     test: /\.css$/,
    //     use: ['style-loader', 'css-loader']
    //   },
      {
          test: /\.(js|jsx)$/,
        // test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  }
}