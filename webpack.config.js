const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'Development测试',
            // template: 'index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    // mode: 'production',
    // entry: './src/xxx.js',
    // output:{
    //     filename: 'yyy.js',
    //     path: path.join(__dirname, 'fang'),
    // },
};