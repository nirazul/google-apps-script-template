const gulp = require('gulp');
const { mapValues } = require('lodash');

/**
 * Use `gulp.watch` to create a `chokidar` watcher instance
 * @param {Array} globs - A list of globs
 * @param {string} cwd - The base directory
 * @return {Object} A `chokidar` instance that event handlers can be bound to
 */
function createFileWatcher(globs, cwd) {
    return gulp.watch(globs, { cwd, ignoreInitial: true });
}


/**
 * Generate a collection of file watcher
 * @param {Object} config - The provided config object
 * @return {Object} A collection of `chokidar` watchers
 */
exports.createFileWatchers = function(config) {
    return mapValues(config, ({ src }) => {
        return createFileWatcher(src.globs, src.options.cwd);
    });
};
