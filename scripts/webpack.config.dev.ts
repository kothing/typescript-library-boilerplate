import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { config } from "./webpack.config";

export default () => ({
  ...config,
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: "./demo/index.ts",
  output: {
    filename: "index.js",
  },
  optimization: {
    minimize: false,
  },
  devServer: {
    open: true,
    hot: true,
    host: "localhost",
    port: 9000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/index.css",
    }),
    new HtmlWebpackPlugin({
      title: "Webpack VanillaJS Typescript Library Template",
      filename: "index.html",
      template: "public/index.html"
    }),
  ],
});
