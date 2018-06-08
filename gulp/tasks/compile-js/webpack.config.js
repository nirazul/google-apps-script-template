const path = require('path');
const GasWebpackPlugin = require('gas-webpack-plugin');
const config = require('./config');
const paths = require('../../config/paths');


module.exports = {
    entry: {
        Polyfills: 'polyfills/Index.gs',
        App: path.join(config.src.options.cwd, 'Index.gs'),
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /(\.js|\.gs)$/,
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
        filename: '[name].gs',
    },
    plugins: [
        new GasWebpackPlugin(),
    ],
    resolve: {
        modules: [
            'node_modules',
            path.resolve(paths.root, 'projects'),
        ],
    },
};
