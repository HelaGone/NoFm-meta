const path = require( 'path' );
const webpack = require( 'webpack' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const devMode = process.env.NODE_ENV !== 'priduction';

// Set different CSS extraction for editor only and common block styles
const blockCSSPlugin = new MiniCssExtractPlugin( {
  filename: devMode ? './dist/[name]_block.css' : './dist/[name].[hash]_block.css',
  chunkFilename: devMode ? "./dist/[id].css" : "./dist/[id].[hash].css"
});

module.exports = {
  entry: {
    './dist/block' : './src/index.js',
  },
  output: {
    path: path.resolve( __dirname ),
    filename: '[name].js',
  },
  watch: true,
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /style\.s?css$/,
        use: [
          devMode ? 'style-loader' : blockCSSPlugin.loader,
          "css-loader",
          "postcss.loader",
          "sass-loader"
        ]
      },
    ]
  },
  plugins: [
    blockCSSPlugin
  ],
};