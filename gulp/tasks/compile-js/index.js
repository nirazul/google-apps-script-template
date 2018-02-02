const gulp = require('gulp');
const gulpBabel = require("gulp-babel");
const gulpTap = require("gulp-tap");
const { babel, revertPath, tap } = require('../../util/gulp-plugins');

const { throwOnInvalidTargetProject } = require('../../util/target-project');
const plumberPipe = require('../../pipes/plumber');
const config = require('./config');

/**
 * Give additional information to the available tasks
 * @param {Function} resolve - A completion indicator callback
 */
function compileJs(resolve) {
  throwOnInvalidTargetProject('compile-js');

  return gulp.src(config.src.globs, config.src.options)
      .pipe(plumberPipe())
      .pipe(babel())
      .pipe(revertPath())
      .pipe(gulp.dest(config.dest.path));
}

// NOTE: Invoke help task
gulp.task('compile-js', compileJs);
