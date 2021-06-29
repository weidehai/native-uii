const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "nativeUI.min.js",
    libraryTarget: "umd",
    library: "Nui",
  }
};
