const gulp = require('gulp');

const plumberPipe = require('../../pipes/plumber');
const config = require('./config');

/**
 * Give additional information to the available tasks
 * @return {Stream} A gulp stream
 */
function copy() {
    return gulp.src(config.src.globs, config.src.options)
        .pipe(plumberPipe())
        .pipe(gulp.dest(config.dest.path));
}

// NOTE: Alias for `copy:clean`
gulp.task('copy', gulp.series('copy:clean'));

// NOTE: Run main task, after cleaning up older files
gulp.task('copy:clean', gulp.series('clean:copy', 'copy:dirty'));

// NOTE: Main task
gulp.task('copy:dirty', copy);
