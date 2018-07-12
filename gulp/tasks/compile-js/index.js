const gulp = require('gulp');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const { outputBundlerStats } = require('./helpers');

const { throwOnMissingTargetProjectArgument, throwOnInexistentTargetProject } = require('../../util/target-project');

/**
 * Give additional information to the available tasks
 * @param {Function} resolve - A completion indicator callback
 */
function compileJs(resolve) {
    throwOnMissingTargetProjectArgument('compile-js');
    throwOnInexistentTargetProject('compile-js');

    const compiler = webpack(webpackConfig);
    compiler.run((error, stats) => {
        outputBundlerStats(error, stats);
        resolve();
    });
}

// NOTE: Alias for `compile-js:clean`
gulp.task('compile-js', gulp.series('compile-js:clean'));

// NOTE: Run main task, after cleaning up older files
gulp.task('compile-js:clean', gulp.series('clean:compileJs', 'compile-js:dirty'));

// NOTE: Main task
gulp.task('compile-js:dirty', gulp.series('lint-js', compileJs));
