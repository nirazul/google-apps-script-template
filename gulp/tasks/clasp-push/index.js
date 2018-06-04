const { spawn } = require('child_process');
const gulp = require('gulp');
const fancyLog = require('fancy-log');

const { throwOnInvalidTargetProject } = require('../../util/target-project');
const config = require('./config');
const { 'project-dir': projectDir } = require('../../util/args');

/**
 * Give additional information to the available tasks
 * @param {Function} resolve - A completion indicator callback
 */
function claspPush(resolve) {
    throwOnInvalidTargetProject('clasp-push');

    fancyLog(`Updating project "${ projectDir }"`);

    const child = spawn('clasp', ['push'], {
        cwd: config.src.options.cwd,
        stdio: 'inherit',
    });

    child.on('close', function(code) {
        if (!code) {
            resolve();
        } else {
            throw Error(code);
        }
    });
}

// NOTE: Invoke help task
gulp.task('clasp-push', claspPush);
