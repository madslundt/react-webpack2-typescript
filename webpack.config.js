"use strict";

const webpack = require("webpack");
const path = require("path");
const process = require("process");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
// const autoprefixer = require('autoprefixer');

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;
const isHotMode = process
    .argv
    .find((a) => {
        return a.indexOf("webpack-dev-server") >= 0;
    }) && process
    .argv
    .find((a) => {
        return a.indexOf("--hot") >= 0;
    });

console.log(isProduction, process.env.NODE_ENV);

const hotPort = 8080;

let config = {
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
                test: /\.tsx?$/,
                exclude: /(node_modules|__tests__)/,
                use: ['awesome-typescript-loader']
            }, {
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
    plugins: [new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            minify: {
                removeComments: true
            }
        })]
};

if (isHotMode) {
    config.entry.Dev = [
        "webpack-dev-server/client?http://localhost:" + hotPort,
        "webpack/hot/dev-server"
    ];
    config.output.publicPath = "http://localhost:" + hotPort + "/dist/";
    config
        .module
        .rules
        .find((l) => {
            return l
                .test
                .toString() === /\.tsx?$/.toString() && !l.enforce
        })
        .use
        .unshift("react-hot-loader");
}

if (isDevelopment) {
    config
        .module
        .rules
        .push({test: /\.(png|woff|woff2|eot|ttf|svg|gif)(\?.+)?(#.+)?$/, use: ["url-loader?limit=100000"]});

    config.devServer = {
        publicPath: "http://localhost:" + hotPort + "/dist/",
        contentBase: path.resolve("./dist"),
        port: hotPort,
        quiet: false,
        noInfo: false,
        historyApiFallback: true,
        hot: true,
        stats: {
            colors: true
        }
    };

    config
        .plugins
        .push(new WriteFilePlugin({test: /\.html/}));
}

if (isProduction) {
    config.resolve.alias = {
        "react": "preact-compat",
        "react-dom": "preact-compat"
    };
    config.output.filename = "[name].[chunkhash].js";

    config
        .plugins
        .push(new ExtractTextPlugin({filename: "[name].[contenthash].css", allChunks: true, disable: false}));
    config
        .plugins
        .push(new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }));
    config
        .plugins
        .push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
