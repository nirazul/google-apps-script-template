const paths = require('../../config/paths');
const copy = require('../../tasks/copy/config');

exports.src = {
    globs: [
        '**/*.js',
        ...copy.src.globs,
    ],
    options: {
        cwd: paths.dest,
    },
};
