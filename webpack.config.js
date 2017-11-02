const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var glob = require("glob");

var configuration = {
    devtool: 'source-map',
    entry: {
        app: glob.sync('./public/assets/js/**/*.js'),
        vendor: [
            'jquery',
            'jquery-placeholder',
            'html5shiv',
            'parsleyjs',
            'slick-carousel',
            'magnific-popup'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'public/assets/'),
        filename: '[name].bundle.min.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            parallel: true,
            sourceMap: true,
            minimize: true,
            comments: false
        })
    ]
};

module.exports = configuration;
