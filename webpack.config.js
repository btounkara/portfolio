const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
          loader: 'babel-loader'
        }
      },{
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true
            }
          }
        ]
      },{
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
        loader: 'file-loader',
        options: {
          name: 'icons/[name].[ext]'
        },
        include: [
          path.resolve(__dirname, 'src/icons')
        ]
      },{
        test: /\.pdf$/i, 
        use : [{
          loader: 'file-loader',
          options: {
            name: 'pdf/[name].[ext]'
          }
        }]
      },{
        test: /\.(jpe?g|png)$/i, 
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        },
        include: [
          path.resolve(__dirname, 'src/images')
        ]
      },{
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: { 
          limit: 10000,
          name: 'css/fonts/[name].[ext]',
          publicPath: '../'
        },
        include: [
          path.resolve(__dirname, 'node_modules/@fortawesome')
        ]
      },
    ]
  },
  plugins: [htmlWebpackPlugin, new ExtractTextPlugin('css/main.css')]
};
