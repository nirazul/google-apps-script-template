const gulp = require('gulp');

/**
 * Give additional information to the available tasks
 * @param {Function} resolve - A completion indicator callback
 */
function help(resolve) {
  console.log('Please use `gulp --tasks` for a list of all available tasks!');
  resolve();
}

// NOTE: Invoke help task
gulp.task('help', help);
