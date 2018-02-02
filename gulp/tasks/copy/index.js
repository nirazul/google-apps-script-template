const gulp = require('gulp');

const plumberPipe = require('../../pipes/plumber');
const config = require('./config');

/**
 * Give additional information to the available tasks
 * @param {Function} resolve - A completion indicator callback
 */
function copy(resolve) {
  return gulp.src(config.src.globs, config.src.options)
      .pipe(plumberPipe())
      .pipe(gulp.dest(config.dest.path));
}

// NOTE: Invoke copy task
gulp.task('copy', copy);
