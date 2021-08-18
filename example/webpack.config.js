const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:'./example/index.js',
  devServer: {
    contentBase: "./example",
    port: "4567",
  },
  externals: {
    ifuncs: "ifuncs",
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: "./example/index.html",
      inject: "body",
    }),
  ]
};
