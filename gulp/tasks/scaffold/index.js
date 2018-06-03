const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const fancyLog = require('fancy-log');

const paths = require('../../config/paths');
const { 'project-dir': projectDir } = require('../../util/args');
const { throwPluginError } = require('../../util/throw-plugin-error');

/**
 * Give additional information to the available tasks
 * @param {Function} resolve - A completion indicator callback
 */
function scaffold(resolve) {
    if (!projectDir) {
        throwPluginError(new Error(`You must specify the project name via the '--project-dir="path/to/projectfolder"' param!`));
    }

    fs.mkdirSync(path.join(paths.root, projectDir));
    fs.mkdirSync(path.join(paths.root, projectDir, 'src'));

    resolve();
}

// NOTE: Invoke help task
gulp.task('scaffold', scaffold);
