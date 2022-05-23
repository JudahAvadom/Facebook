const path = require('path');
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const Dotenv = require('dotenv');
Dotenv.config();

let mode = process.env.NODE_ENV || "development";
let port = process.env.PORT || 8000;

module.exports = {
    mode,
    target: 'web',
    entry: ['./src/index.js'],
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
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve( __dirname, 'index.html' ),
            minify: false,
        }),
    ],
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['', '.js', '.jsx'],
    },
    devServer: {
        port,
        historyApiFallback: true,
        allowedHosts: ["all"]
    },
    devtool: 'source-map'
}