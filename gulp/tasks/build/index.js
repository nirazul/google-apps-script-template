const gulp = require('gulp');

// NOTE: Inits a full build
gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('compile-js', 'copy'),
    'clasp-push',
));
