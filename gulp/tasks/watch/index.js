const path = require('path');
const gulp = require('gulp');
const { debounce } = require('lodash');

const { throwOnInvalidTargetProject } = require('../../util/target-project');
const { claspPush, compileJs, copy } = require('../../config/task-configs');
const { createFileWatchers } = require('./helpers');

/**
 * Add file watchers for all tasks
 */
function watch() {
  throwOnInvalidTargetProject('watch');

  const watchers = createFileWatchers({ claspPush, compileJs, copy });

  // Javascript task files
  watchers.compileJs
      .on('all', debounce(gulp.series('compile-js'), 200));

  // Copy task files
  watchers.copy
      .on('all', debounce(gulp.series('copy'), 200));

  // Dist file upload
  watchers.claspPush
      .on('all', debounce(gulp.series('clasp-push'), 1000));
}

// NOTE: Main task
gulp.task('watch', gulp.series('build', watch));
