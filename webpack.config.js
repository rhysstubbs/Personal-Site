const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        index: './assets/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '/assets')
    }
}



/**
module.exports = {
    entry: './public/assets/js/core.js',
    output: {
        path: path.resolve(__dirname, 'public/assets/js/dist'),
        filename: 'core.min.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true
        })
    ]
};


module.exports = {
    entry: './public/assets/scss/screen.scss',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader?sourceMap"
                    }, {
                        loader: "resolve-url-loader"
                    }, {
                        loader: "file-loader"
                    }],
                    fallback:'style-loader',
                })

            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './public/assets/css/'),
        filename: 'test.min.css'
    },
    plugins: [
        new ExtractTextPlugin('./public/assets/scss/screen.scss')
    ]
};


module.exports = {
    entry: {
        jquery: "./node_modules/jquery/dist/jquery.js",
        html5shiv: "./node_modules/html5shiv/dist/html5shiv.js",
        bootstrap_sass: "./node_modules/bootstrap-sass/assets/javascripts/bootstrap",
        parsleyjs: "./node_modules/parsleyjs/dist/parsley.js",
        jquery_placeholder: "./node_modules/jquery-placeholder/jquery.placeholder.js",
        imagesloaded: "./node_modules/imagesloaded/imagesloaded.js",
        magnific_popup: "./node_modules/magnific-popup/dist/jquery.magnific-popup.js",
        slick_slider: "./node_modules/slick-carousel/slick/slick.js"
    },
    output: {
        path: path.resolve(__dirname, 'public/assets/js/dist'),
        filename: 'test.min.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true
        })
    ]
};
*/