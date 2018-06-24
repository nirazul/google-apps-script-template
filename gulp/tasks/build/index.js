const gulp = require('gulp');
const { spawn } = require('child_process');

const paths = require('../../config/paths');
const projects = require('../../config/projects');
const { throwOnNoRegisteredProjects } = require('../../util/registered-projects');
const { onClose } = require('../../util/handle-child-process');

// NOTE: Init a full build
gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('compile-js:dirty', 'copy:dirty'),
    'clasp-push',
));

// NOTE: Init a full build for all projects
gulp.task('build:all', function() {
    throwOnNoRegisteredProjects('build:all');

    const promises = projects.map(project => () => new Promise((resolve, reject) => {
        const child = spawn('gulp', ['build', '--project-dir', project], {
            cwd: paths.root,
            stdio: 'inherit',
        });

        onClose(child, resolve, reject);
    }));

    return promises.reduce((acc, promise) => acc.then(promise), Promise.resolve());
});
