const path = require('path');
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const WebpackMessages = require('webpack-messages');
const Dotenv = require('dotenv');
Dotenv.config();

let mode = process.env.NODE_ENV || "development";
let port = process.env.PORT || 8000;
let target = 'web';

if (process.env.NODE_ENV === "production") {
    target = "browserslist";
}

module.exports = {
    mode,
    target,
    entry: ['./src/index.jsx'],
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'build/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {limit: 10000,},
                    },
                ],
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve( __dirname, 'index.html' ),
            minify: false,
        }),
        new MiniCssExtractPlugin({
            filename: 'build/styles.css'
        }),
        new WebpackMessages({
            name: 'client',
            logger: str => console.log(`>> ${str}`)
        })
    ],
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['', '.js', '.jsx'],
    },
    devServer: {
        port,
        historyApiFallback: true,
        static: path.join(__dirname, 'dev'),
        allowedHosts: ["all"],
        hot: true,
    },
    stats: "errors-only",
    devtool: 'source-map'
}