/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  devtool: 'hidden-source-map',

  entry: {
    index: path.join(__dirname, './index.tsx'),
  },

  output: {
    filename: '[name]_[hash].js',
    path: path.join(__dirname, './dist'),
  },

  resolve: {
    extensions: ['.js', '.json', '.tsx', '.ts'],
    alias: {
      '@': path.join(__dirname, './page'),
    },
  },

  module: {
    rules: [
      {
        test: /\.tx|\.tsx$/,
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
          ], // 一个presets为一系列功能集合
          plugins: ['@babel/transform-runtime'],
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => {
                  require('autoprefixer')({
                    browsers: ['last 2 version', '>1%'],
                  })
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)(\?.+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
    ],
  },

  plugins: [
    // 抽离出css
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[contenthash].css',
      chunkFilename: '[id]_[contenthash]',
    }),

    new htmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
      filename: 'index.html',
    }),
  ],
}
