const path = require('path');
const paths = require('../../config/paths');
const { getSourceRelativeDir } = require('./helpers');


exports.src = {
    globs: [
        '**/*.js',
        path.join(getSourceRelativeDir(paths, 'projects/polyfills'), '**/*.js'),
    ],
    options: {
        cwd: paths.src,
    },
};

exports.dest = {
    path: paths.dest,
    globs: [
        '**/*.js',
    ],
};
