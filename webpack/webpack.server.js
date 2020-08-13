const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpackNodeExternals = require("webpack-node-externals");

const server = {
    //Bundle for node js
    target: "node",
    entry: "./src/server/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../build"),
    },
    externals: [webpackNodeExternals()],
};

module.exports = merge(common, server);
