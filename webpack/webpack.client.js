const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const config = {
    entry: "./src/client/index.js",
    mode: "development",
    stats: "errors-warnings",
    devtool: "source-map",
    devServer: {
        compress: true,
        contentBase: path.resolve("public"),
        watchContentBase: true,
        hot: true,
        overlay: true,
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../public"),
    },
    module: {
        rules: [
            {
                test: /.(css|scss)$/,
                use: [
                    // fallback to style-loader in development
                    // "isomorphic-style-loader",

                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
};

module.exports = merge(common, config);
