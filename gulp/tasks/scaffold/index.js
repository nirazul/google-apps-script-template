const path = require('path');
const gulp = require('gulp');

const paths = require('../../config/paths');
const { 'project-dir': projectDir } = require('../../util/args');
const { throwPluginError } = require('../../util/throw-plugin-error');
const { addToProjects, makeProjectFolder, provideClaspProject } = require('./helpers');

/**
 * Give additional information to the available tasks
 * @param {Function} resolve - A completion indicator callback
 */
function scaffold(resolve) {
    if (!projectDir) {
        throwPluginError(new Error(`You must specify the project name via the '--project-dir="path/to/projectfolder"' param!`));
    }

    const promises = [makeProjectFolder, provideClaspProject, addToProjects];
    return promises.reduce((acc, promise) => acc.then(promise), Promise.resolve());
}

// NOTE: Main task
gulp.task('scaffold', scaffold);
