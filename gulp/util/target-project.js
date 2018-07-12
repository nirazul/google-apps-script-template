const fs = require('fs');
const { 'project-dir': projectDir } = require('../util/args');

const paths = require('../config/paths');
const { throwPluginError } = require('./throw-plugin-error');

const targetProjectExists = fs.existsSync(paths.src);

/**
 * Check for the existence of the `project-dir` CLI param
 * @param {string} taskName - A task name executing the check
 */
exports.throwOnMissingTargetProjectArgument = function(taskName) {
    if (projectDir) {
        return;
    }

    const message = `You must specify a target project with '--project-dir="path/to/projectfolder"' when using this task: '${ taskName }'`;
    throwPluginError(new Error(message));
};

/**
 * Check for the existence of a valid project dir
 * @param {string} taskName - A task name executing the check
 */
exports.throwOnInexistentTargetProject = function(taskName) {
    if (projectDir && targetProjectExists) {
        return;
    }

    const message = `The specifiet target project '${ projectDir }' does not exist. You must specify an existing one when using this task: '${ taskName }'!`;
    throwPluginError(new Error(message));
};
