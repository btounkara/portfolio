const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },{
        test: /\.svg$/i, 
        use : [{
          loader: "file-loader",
          options: {
            name: 'icons/[name].[ext]',
            publicPath: '/dist'
          }
        }]
      }, {
        test: /\.pdf$/i, 
        use : [{
          loader: "file-loader",
          options: {
            name: 'pdf/[name].[ext]',
            publicPath: '/dist'
          }
        }]
      },{
        test: /\.(jpe?g|png)$/i, 
        use : [{
          loader: "file-loader",
          options: {
            name: 'images/[name].[ext]',
            publicPath: '/dist'
          }
        }]
      }
    ]
  },
  plugins: [htmlWebpackPlugin, new ExtractTextPlugin('css/main.css')]
};
