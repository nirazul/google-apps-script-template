const path = require('path');
const GasWebpackPlugin = require('gas-webpack-plugin');
const config = require('./config');
const paths = require('../../config/paths');


module.exports = {
    devtool: false,
    entry: {
        polyfills: 'polyfills/index.js',
        app: path.join(config.src.options.cwd, 'index.js'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /(\.js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: './[name].[ext]',
                    },
                },
            },
        ],
    },
    output: {
        path: config.dest.path,
        filename: '[name].js',
    },
    plugins: [
        new GasWebpackPlugin(),
    ],
    resolve: {
        extensions: ['*', '.js'],
        modules: [
            'node_modules',
            path.resolve(paths.root, 'projects'),
        ],
    },
};
