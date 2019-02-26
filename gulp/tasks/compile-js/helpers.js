const path = require('path');
const fancyLog = require('fancy-log');

/**
 * Create a path that is relative to the src directory to use in globbing patterns with a `cwd`
 * @param {object} paths - The paths object
 * @param {string} paths.root - The root path
 * @param {string} paths.src - The src path
 * @param {string} dir - The project directory path
 * @return {string} The source relative path
 */
exports.getSourceRelativeDir = function({ root, src }, dir) {
    return path.relative(src, path.join(root, dir));
};

/**
 * Output errors that come from the webpack bundler
 * @param {Error} error - A webpack error object
 * @param {object} stats - A webpack stats object
 */
exports.outputBundlerStats = function(error, stats) {
    if (error) {
        throw error;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
        throw Error(info.errors[0]);
    }

    if (stats.hasWarnings()) {
        fancyLog.warn(info.warnings);
    }

    // NOTE: Display detailed stats in the terminal
    fancyLog(stats.toString({
        all: false,
        assets: true,
        entrypoints: false,
        hash: true,
        performance: true,
        timings: true,
        version: true,
    }));
};
