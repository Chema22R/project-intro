const common = require("./webpack.config.js");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    entry: {
        index: "./src/index.js"
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
});