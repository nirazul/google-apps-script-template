const gulp = require('gulp');
const fancyLog = require('fancy-log');

/**
 * Give additional information to the available tasks
 * @param {Function} resolve - A completion indicator callback
 */
function help(resolve) {
    fancyLog.info('⚠️  Please use `gulp --tasks` for a list of all available tasks!');
    resolve();
}

// NOTE: Invoke help task
gulp.task('help', help);
