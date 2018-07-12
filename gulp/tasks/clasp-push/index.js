const { spawn } = require('child_process');
const gulp = require('gulp');
const fancyLog = require('fancy-log');

const { 'project-dir': projectDir } = require('../../util/args');
const { throwOnMissingTargetProjectArgument, throwOnInexistentTargetProject } = require('../../util/target-project');
const config = require('./config');

/**
 * Give additional information to the available tasks
 * @param {Function} resolve - A completion indicator callback
 */
function claspPush(resolve) {
    throwOnMissingTargetProjectArgument('clasp-push');
    throwOnInexistentTargetProject('clasp-push');

    fancyLog(`Updating project "${ projectDir }"`);

    const child = spawn('clasp', ['push'], {
        cwd: config.src.options.cwd,
        stdio: 'inherit',
    });

    child.on('close', function(code) {
        if (code) {
            throw Error(code);
        } else {
            resolve();
        }
    });
}

// NOTE: Main task
gulp.task('clasp-push', claspPush);
