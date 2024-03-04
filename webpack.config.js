const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './final.html', // Specify the path to your HTML template
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
  // ...
  // ...
  // ...
  devServer: {
    static: path.join(__dirname, 'dist'),
    open: 'final.html',
    port: 8080,
    proxy: [
      {
        context: ['/api'],
        target: 'http://api.weatherapi.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    ],
  },

};
