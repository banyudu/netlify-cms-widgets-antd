const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const styleRules = [
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  },
  {
    test: /\.less$/,
    use: [
      "style-loader",
      "css-loader",
      "postcss-loader",
      { loader: "less-loader", options: { lessOptions: { javascriptEnabled: true } } }
    ]
  }
]

const developmentConfig = {
  mode: "development",
  entry: "./dev/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "source-map-loader",
        enforce: "pre",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      ...styleRules
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  devtool: "eval-source-map",
};

const productionConfig = {
  mode: "production",
  output: {
    filename: 'netlify-cms-widgets-antd.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
      ...styleRules
    ],
  },
  devtool: "source-map",
};

module.exports =
  process.env.NODE_ENV === "production" ? productionConfig : developmentConfig;
