const gulp = require('gulp');
const del = require('del');

const { throwOnMissingTargetProjectArgument, throwOnInexistentTargetProject } = require('../../util/target-project');
const paths = require('../../config/paths');
const taskConfigs = require('../../config/task-configs');
const { compileGlobs } = require('./helpers');

const TYPES = ['compileJs', 'copy'];

/**
 * Remove old files from certain paths as a preparation to add new files
 * @param {string} type - The cleaning action's type
 * @return {Function} A completion callback that is invoked after the delete is finished
 */
function clean(type) {
    throwOnMissingTargetProjectArgument('clean');
    throwOnInexistentTargetProject('clean');

    let delPath;
    const delConfig = { force: true };

    switch (type) {
        case 'compileJs':
            delPath = compileGlobs(taskConfigs[type].dest);
            break;
        case 'copy':
            delPath = compileGlobs(taskConfigs[type].dest);
            break;
        default:
            delPath = [paths.dest];
            break;
    }

    return del(delPath, delConfig);
}

// NOTE: Register task for cleaning everything
gulp.task('clean', () => clean());

// NOTE: Register all subtasks for cleaning folders
TYPES.forEach(type => {
    gulp.task(`clean:${ type }`, () => clean(type));
});
