const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const baseConfig = require("./webpack.base");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(baseConfig, {
  mode: "production",

  plugins: [new MiniCssExtractPlugin({
    filename: 'style/[name].css',
  })],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ cache: true, parallel: true })]
  }
});
