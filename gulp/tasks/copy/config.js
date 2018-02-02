const path = require('path');
const paths = require('../../config/paths');

exports.src = {
  globs: [
    '.clasp.json',
    '.claspignore',
    'appsscript.json',
  ],
  options: {
    cwd: paths.src,
    dot: true,
  },
};

exports.dest = {
  path: paths.dest,
};
