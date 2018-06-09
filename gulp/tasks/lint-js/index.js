const gulp = require('gulp');
const gulpEslint = require('gulp-eslint');

const compileJsConfig = require('../compile-js/config');
const plumberPipe = require('../../pipes/plumber');
const createEslintReportPipe = require('./pipes/create-eslint-report');


/**
 * Lint js files with eslint
 * @param {Function} resolve - A completion indicator callback
 * @return {Stream} A gulp stream
 */
function lintJs(resolve) {
    return gulp.src(compileJsConfig.src.globs, compileJsConfig.src.options)
        .pipe(plumberPipe())
        .pipe(gulpEslint())
        .pipe(createEslintReportPipe()())
        // NOTE: Lazypipe hangs when being the last pipe, so we resolve the stream manually
        // @link https://github.com/OverZealous/lazypipe/issues/14
        .on('end', resolve);
}

// NOTE: Main task
gulp.task('lint-js', lintJs);
