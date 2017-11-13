const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimiseCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');

const configuration = {
    devtool: 'eval',
    node: {
        fs: 'empty'
    },
    entry: {
        app: './assets/js/core.js'
    },
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, 'assets/dist'),
        filename: '[name].bundle.min.js',
        pathinfo: true
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
                loader: 'file-loader?name=/images/[name].[ext]'
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            "spritesmith-generated"]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.min.js',
            minChunks: function (module) {
                return module.context && (module.context.indexOf('node_modules') !== -1);
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            parallel: true,
            sourceMap: true,
            minimize: true,
            comments: false
        }),
        new ExtractTextPlugin({
            filename: "[name].min.css",
            allChunks: true
        }),
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
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'assets/images/sprites'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(__dirname, './assets/images/sprite.png'),
                css: path.resolve(__dirname, './assets/images/sprite.styl')
            },
            //retina: '@2x',
            padding: 2,
            apiOptions: {
                cssImageRef: "~sprite.png"
            }
        }),
        new LiveReloadPlugin({
            appendScriptTag: true,
            port: 35729,
            hostname: 'localhost'
        })
    ]
};


module.exports = configuration;
