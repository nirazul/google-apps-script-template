const { spawn } = require('child_process');
const gulp = require('gulp');
const fancyLog = require('fancy-log');

const { throwOnInvalidTargetProject } = require('../../util/target-project');
const config = require('./config');

/**
 * Give additional information to the available tasks
 * @param {Function} resolve - A completion indicator callback
 */
function claspPush(resolve) {
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
