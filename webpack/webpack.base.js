const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  entry: { index: "./src/index.tsx" },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        use: ["babel-loader"]
      },
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/],
        use: ["ts-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        },
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  plugins: [
    new HtmlWebPackPlugin({
      favicon: "./src/assets/favicon.ico",
      template: "./src/index.html",
      filename: "index.html",
      minify: {
        removeComments: true,
        minifyJS: true,
        minifyCSS: true
      }
    })
  ],

  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.js",
    publicPath: "/"
  }
};
