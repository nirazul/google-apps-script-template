const { join } = require('path');

/**
 * Append a base path to a series of globs
 * @param {Object} config - A config object
 * @param {string} config.path - The base path
 * @param {Array} config.globs - A list of globs
 * @return {Array} A list of glob strings
 */
exports.compileGlobs = function({ path, globs }) {
    return globs.map(glob => join(path, glob));
};
