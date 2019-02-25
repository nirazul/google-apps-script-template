const path = require('path');
const yargs = require('yargs');
const paths = require('./paths');

const { src } = yargs.argv;

module.exports = {
    entry: {
        Polyfills: 'polyfills/Index.gs',
        App: path.resolve(process.cwd(), path.join(src, 'Index.gs')),
    },
    resolve: {
        modules: [
            path.resolve(paths.root, 'projects'),
        ],
    },
};
