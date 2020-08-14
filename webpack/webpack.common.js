const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx", ".scss"],
        alias: {
            atoms: path.resolve(__dirname, "../src/common/atoms"),
        },
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
};
