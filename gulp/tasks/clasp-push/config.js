const path = require('path');

const paths = require('../../config/paths');
const compileJs = require('../../tasks/compile-js/config');
const copy = require('../../tasks/copy/config');


exports.src = {
  globs: [
      ...compileJs.src.globs,
      ...copy.src.globs,
  ],
  options: {
    cwd: paths.dest,
  },
};
