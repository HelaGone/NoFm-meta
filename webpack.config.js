const path = require( 'path' );
const webpack = require( 'webpack' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const devMode = process.env.NODE_ENV !== 'priduction';

// Set different CSS extraction for editor only and common block styles
const blockCSSPlugin = new MiniCssExtractPlugin( {
  filename: devMode ? './[name]_block.css' : './[name].[hash]_block.css',
  chunkFilename: devMode ? "./[id].css" : "./[id].[hash].css"
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
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        },
          "css-loader",
          "postcss-loader"
        ]
      },
    ]
  },
  plugins: [
    blockCSSPlugin
  ],
};