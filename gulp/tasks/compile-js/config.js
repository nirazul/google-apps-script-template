const path = require('path');
const paths = require('../../config/paths');
const { getSourceRelativeDir } = require('./helpers');


exports.src = {
    globs: [
        '**/*.gs',
        path.join(getSourceRelativeDir(paths, 'projects/polyfills'), '**/*.gs'),
    ],
    options: {
        cwd: paths.src,
    },
};

exports.dest = {
    path: paths.dest,
    globs: [
        '**/*.gs',
    ],
};
