const path = require('path');
const paths = require('../../config/paths');

exports.src = {
  globs: [
    '**/*.gs',
  ],
  options: {
    cwd: paths.src,
  },
};

exports.dest = {
  path: paths.dest,
};
