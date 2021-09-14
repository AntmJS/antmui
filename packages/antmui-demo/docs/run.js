/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const { getPort } = require('@antcook/cli-utils')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Server = require('webpack-dev-server')

const devServer = {
  contentBase: path.join(__dirname, './dist'),
  host: 'localhost',
  port: 7777,
  inline: true,
  historyApiFallback: true,
  open: true,
  hot: true,
}

const compiler = webpack({
  mode: 'development',
  devtool: 'eval',
  entry: {
    index: path.join(__dirname, './index.tsx'),
  },

  output: {
    filename: 'index.js',
    path: path.join(__dirname, './dist'),
  },

  devServer,

  resolve: {
    extensions: ['.js', '.json', '.tsx', '.ts'],
  },

  module: {
    rules: [
      {
        test: /\.tx|\.tsx|.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  esmodules: false,
                },
              },
            ],
            '@babel/preset-react',
            [
              '@babel/preset-typescript',
              {
                isTSX: true,
                jsxPragma: 'React',
                allExtensions: true,
                allowNamespaces: true,
              },
            ],
          ],
          plugins: ['@babel/transform-runtime'],
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(jpe?g|png|gif)(\?.+)?$/,
        loader: 'file-loader',
        options: {
          esModule: false,
        },
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
        options: {
          esModule: false,
        },
      },
    ],
  },

  plugins: [
    // 抽离出css
    new MiniCssExtractPlugin({
      filename: 'css/.css',
      chunkFilename: '[id]',
    }),

    new htmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
      filename: 'index.html',
    }),

    new webpack.HotModuleReplacementPlugin({}),
  ],
})

getPort(devServer.port).then((port) => {
  devServer.port = port
  const app = new Server(compiler, devServer)

  app.listen(devServer.port, function (err) {
    if (err) throw err
  })
})
