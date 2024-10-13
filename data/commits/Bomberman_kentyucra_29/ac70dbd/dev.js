const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack")

module.exports = merge(common, {
    mode: 'development',
    devtool: false,
    performance: {
        maxEntrypointSize: 90000,
        maxAssetSize: 900000
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.SERVER_HOST': JSON.stringify(process.env.SERVER_HOST),
            'process.env.SERVER_PORT': JSON.stringify(process.env.SERVER_PORT),
        }),
    ]
})