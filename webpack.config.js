const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      // Transpile all .js files using babel, so the app is supported by old browsers
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true,
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      // Putting all .svg files into /images/technologies_icons directory
      {
        test: /\.svg$/i, 
        loader: 'file-loader',
        options: {
          name: 'images/technologies_icons/[name].[ext]'
        },
        include: [
          path.resolve(__dirname, 'src/icons')
        ]
      },
      // Putting all pdfs files into /pdf directory
      {
        test: /\.pdf$/i, 
        use : [{
          loader: 'file-loader',
          options: {
            name: 'pdf/[name].[ext]'
          }
        }]
      },
      // Putting all .jpe?g and .png images into /images directory
      {
        test: /\.(jpe?g|png)$/i, 
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        },
        include: [
          path.resolve(__dirname, 'src/images')
        ]
      },
      // Putting all fonts into css/fonts directory
      {
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
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [htmlWebpackPlugin, new MiniCssExtractPlugin({ filename: 'css/main.css' })]
};
