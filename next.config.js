/* eslint-disable import/no-extraneous-dependencies */
const webpack = require("webpack");

module.exports = {
  target: "serverless",
  webpack: (config) => {
    config.plugins.push(new webpack.DefinePlugin({ "global.GENTLY": false }));
    return config;
  },
};

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true,
        },
        sourceMap: true,
      }),
    ],
  },
};
