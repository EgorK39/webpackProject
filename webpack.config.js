const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        filename: './main.js',
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({template: "./src/index.pug", filename: "index.html"}),
        new TerserWebpackPlugin(),
        new CssMinimizerPlugin(),
        new ESLintPlugin(),
        new StylelintPlugin(),
    ],
    module: {
        rules: [
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    },
                }, 'css-loader'],
                test: /\.css$/
            },
            {
                test: /\.pug$/,
                use: 'pug-loader',
            },
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
        ]
    },
    devServer: {
        static: './dist',
        hot: true,

    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin(),
            new CssMinimizerPlugin()
        ]
    },
    devtool: "inline-source-map",
}