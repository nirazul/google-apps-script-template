const gulp = require('gulp');

const { throwOnMissingTargetProjectArgument } = require('../../util/target-project');
const { addToProjects, makeProjectFolder, provideClaspProject } = require('./helpers');

/**
 * Give additional information to the available tasks
 * @return {Promise} A promise indicating completion
 */
function scaffold() {
    throwOnMissingTargetProjectArgument('scaffold');

    const promises = [makeProjectFolder, provideClaspProject, addToProjects];
    return promises.reduce((acc, promise) => acc.then(promise), Promise.resolve());
}

// NOTE: Main task
gulp.task('scaffold', scaffold);
