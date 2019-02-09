const TerserPlugin = require('terser-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const env = process.env.NODE_ENV
const path = require('path')

module.exports = {
  mode: env || 'development',
  entry: { app: './src/index.js' },
  output: { path: path.resolve(__dirname, 'dist'), filename: 'index.js' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin()
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist/*', {})
  ]
}
