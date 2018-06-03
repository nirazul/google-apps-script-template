const path = require('path');
const paths = require('../../config/paths');

const src = exports.src = {
    globs: [
        '**/*.gs',
    ],
    options: {
        cwd: paths.src,
    },
};

exports.dest = {
    path: paths.dest,
    globs: src.globs,
};
