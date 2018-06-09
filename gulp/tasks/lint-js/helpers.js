const path = require('path');
const lazypipe = require('lazypipe');
const gulpEslint = require('gulp-eslint');

const compileJsConfig = require('../compile-js/config');

/**
 * Create a lazypipe instance that handles error reporting as well as cache invalidation
 * @return {Function} A lazypipe instance
 */
exports.createEslintReportPipe = function() {
  return lazypipe()
    .pipe(gulpEslint.format, 'stylish');
};
