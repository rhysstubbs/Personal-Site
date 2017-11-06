const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimiseCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const ConcatPlugin = require('webpack-concat-plugin');


var glob = require("glob")


const configuration = {
    devtool: 'source-map',
    node: {
        fs: 'empty'
    },
    entry: {
        app: [
                './public/assets/js/core.js',
                './public/assets/dist/lib.js',
        ],
        vendor: './public/assets/js/vendor.js'
    },
    output: {
        path: path.resolve(__dirname, 'public/assets/dist'),
        filename: '[name].bundle.min.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?emitFile=false'
            },
            {
                test: /\.png$/,
                loader: 'file-loader?name=/images/[hash].[ext]'
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            "spritesmith-generated"]
    },
    plugins: [
        // MINIFY ALL JAVASCRIPT IN BUNDLE
        new webpack.optimize.UglifyJsPlugin({
            parallel: true,
            sourceMap: true,
            minimize: true,
            comments: false
        }),
        // EXTRACT ALL SCSS TO CSS
        new ExtractTextPlugin({
            filename: "[name].min.css",
            allChunks: true
        }),
        // MINIFY ALL CSS
        new OptimiseCssAssetsPlugin({
            assetNameRegExp: /\.min\.css$/,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                },
                preset: 'default',
                map: {
                    inline: false
                }
            },
            canPrint: true
        }),
        //BUILD SPRITE FILE FROM PNGs
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'public/assets/images/sprites'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(__dirname, 'public/assets/images/sprite.png'),
                css: path.resolve(__dirname, 'public/assets/images/sprite.styl')
            },
            retina: '@2x',
            padding: 2
        }),
        new ConcatPlugin({
            uglify: true,
            sourceMap: true,
            name: 'lib',
            fileName: '[name].min.js',
            filesToConcat: glob.sync('public/assets/js/lib/**/*.js')
        }),
        // CONFIGURE LIVE RELOAD FOR DEV WORK
        new LiveReloadPlugin({
            appendScriptTag: true,
            port: 35729,
            hostname: 'localhost'
        })
    ]
};


module.exports = configuration;
