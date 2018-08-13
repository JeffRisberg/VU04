const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './app/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ]
      },
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/public/icons/[name].[ext]" }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^(buffertools)$/), // unwanted "deeper" dependency
    new MiniCssExtractPlugin({ filename: 'public/style.css', allChunks: true })
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  }
}
