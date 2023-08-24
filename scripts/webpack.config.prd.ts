import path from "path";
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import getPackageJson from './getPackageJson';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

import { config } from "./webpack.config";

const MyLibrary = "MyLibrary";

const {
  version,
  name,
  license,
  repository,
  author,
} = getPackageJson('version', 'name', 'license', 'repository', 'author');

const banner = `
 Name: ${name} 
 Version: ${version}
 Repository: ${repository.url}

 Copyright (c) ${author.replace(/ *<[^)]*> */g, " ")} and project contributors.

 This source code is licensed under the ${license} license found in the LICENSE file in the root directory of this source tree.
`;

export default () => ({
  ...config,
  mode: "production",
  devtool: "source-map",
  entry: "./src/index.ts",
  output: {
    filename: `${MyLibrary}.js`,
    path: path.resolve(__dirname, "../dist"),
    library: MyLibrary,
    libraryTarget: "umd",
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false }), new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/index.css",
    }),
    new webpack.BannerPlugin(banner),
  ],
});
