const path = require('path');
const gulp = require('gulp');
const { spawn } = require('child_process');
const { debounce } = require('lodash');

const { createFileWatchers } = require('./helpers');
const paths = require('../../config/paths');
const projects = require('../../config/projects');
const { claspPush, compileJs, copy } = require('../../config/task-configs');
const { throwOnNoRegisteredProjects } = require('../../util/registered-projects');
const { throwOnInvalidTargetProject } = require('../../util/target-project');

/**
 * Add file watchers for all tasks
 */
function watch() {
  throwOnInvalidTargetProject('watch');

  const watchers = createFileWatchers({ claspPush, compileJs, copy });

  // Javascript task files
  watchers.compileJs.on('all', debounce(gulp.series('compile-js'), 200));

  // Copy task files
  watchers.copy.on('all', debounce(gulp.series('copy'), 200));

  // Dist file upload
  watchers.claspPush.on('all', debounce(gulp.series('clasp-push'), 1000));
}

/**
 * Start file watchers for all registered projects
 */
function watchAll() {
  throwOnNoRegisteredProjects('watch:all');

  projects.forEach(project => spawn('gulp', ['watch:only', '--project-dir', project], {
    cwd: paths.root,
    stdio: 'inherit',
  }));
}

// NOTE: Main task
gulp.task('watch', gulp.series('build', watch));

// NOTE: Watch without building beforehand
gulp.task('watch:only', watch);

// NOTE: Watch all projets
gulp.task('watch:all', gulp.series('build:all', watchAll));
