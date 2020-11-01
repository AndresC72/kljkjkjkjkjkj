const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")
// Standard style loader (prod and dev covered here)
const MiniCssExtractPlugin = require("mini-css-extract-plugin");const devMode = process.env.NODE_ENV !== 'production';
const styleLoader = devMode ? 'style-loader' : MiniCssExtractPlugin.loader;


module.exports = {
  output: {
    path: path.resolve(__dirname, 'dis'),
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      //cargadores para imagenes
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(ng|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: false,
            },
          },
        ],
      },

      //cargadores de estilos
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', "sass-loader"]
       },
       {
        test: /\.module\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', "sass-loader"]
       },

       //cargador videos
       {
        test: /\.(mov|mp4)$/,
        use: {
          loader:'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
       },
    ]
  }
}