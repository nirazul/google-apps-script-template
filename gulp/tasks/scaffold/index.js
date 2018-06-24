const gulp = require('gulp');

const { 'project-dir': projectDir } = require('../../util/args');
const { throwPluginError } = require('../../util/throw-plugin-error');
const { addToProjects, makeProjectFolder, provideClaspProject } = require('./helpers');

/**
 * Give additional information to the available tasks
 * @return {Promise} A promise indicating completion
 */
function scaffold() {
    if (!projectDir) {
        const message = `You must specify the project name via the '--project-dir="path/to/projectfolder"' param!`;
        throwPluginError(new Error(message));
    }

    const promises = [makeProjectFolder, provideClaspProject, addToProjects];
    return promises.reduce((acc, promise) => acc.then(promise), Promise.resolve());
}

// NOTE: Main task
gulp.task('scaffold', scaffold);
