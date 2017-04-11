const path              = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry: ["./src/index"],
    output: {
        path: path.resolve("./dist"),
        filename: "[name].js",
        sourceMapFilename: "[file].map",
        publicPath: "/dist/"
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                use: ['source-map-loader']
            }, {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: ['source-map-loader']
            }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            }, {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass"]
            }
        ]
    },
    // postcss: [autoprefixer],
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            minify: {
                removeComments: true
            }
        })
    ]
};

module.exports = config;