const gulp = require('gulp');
const { spawn } = require('child_process');

const paths = require('../../config/paths');
const projects = require('../../config/projects');
const { throwOnNoRegisteredProjects } = require('../../util/registered-projects');

// NOTE: Inits a full build
gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('compile-js', 'copy'),
    'clasp-push',
));

gulp.task('build:all', function(done) {
  throwOnNoRegisteredProjects('build:all');

  const promises = projects.map(project => () => new Promise((resolve, reject) => {
    const child = spawn('gulp', ['build', '--project-dir', project], {
      cwd: paths.root,
      stdio: 'inherit',
    });

    child.on('close', code => {
      if (!code) {
        resolve();
      } else {
        reject(code);
      }
    });
  }));

  return promises.reduce((acc, promise) => acc.then(promise), Promise.resolve());
});
