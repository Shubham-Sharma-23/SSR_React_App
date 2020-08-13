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
                options: {
                    presets: ["react", "stage-0", ["env", { targets: { browsers: ["last 2 versions"] } }]],
                },
            },
            {
                test: /.(css|scss)$/,
                use: [
                    // fallback to style-loader in development
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
};
