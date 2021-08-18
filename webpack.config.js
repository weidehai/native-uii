const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "nativeUI.min.js",
    libraryTarget: "umd",
    library: "Nui",
  },
  externals: {
    ifuncs: "ifuncs",
  },
  module: {
    rules: [
      {
        test: /\.(tpl|ejs)$/,
        loader: "ejs-loader",
        options: {
          esModule: false,
          variable: 'data',
        },
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};
