const fancyLog = require('fancy-log');

/**
 * Output errors that come from the webpack bundler
 * @param {Error} error - A webpack error object
 * @param {Object} stats - A webpack stats object
 */
exports.outputBundlerStats = function(error, stats) {
    if (error) {
        throw error;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
        throw new Error(info.errors[0]);
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
