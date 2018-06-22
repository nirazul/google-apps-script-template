const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const paths = require('../../config/paths');
const { 'project-dir': projectDir, 'script-id': scriptId } = require('../../util/args');
const { onClose } = require('../../util/handle-child-process');

/**
 * Implement a nested directory structure
 * @link https://stackoverflow.com/a/40686853/1602864
 *
 * @param {str} targetDir - A relative path to the target directory
 * @param {str} baseDir - The root directory from which to build the path
 */
function createNestedDir(targetDir, baseDir) {
    const { isAbsolute, sep } = path;
    const initDir = path.relative(baseDir, targetDir);

    initDir.split(sep).reduce((parentDir, childDir) => {
        const curDir = path.resolve(parentDir, childDir);

        try {
            fs.mkdirSync(curDir);
        } catch (err) {
            if (err.code !== 'EEXIST') {
                throw err;
            }
        }

        return curDir;
    }, baseDir);
}

/**
 * Create a new clasp project
 */
function createClaspProject() {
    return new Promise((resolve, reject) => {
        const child = spawn('clasp', ['create'], {
            cwd: paths.src,
            stdio: 'inherit',
        });

        onClose(child, resolve, reject);
    });
}

/**
 * Clone an existing clasp project
 */
function cloneClaspProject() {
    return new Promise((resolve, reject) => {
        const child = spawn('clasp', ['clone', scriptId], {
            cwd: paths.src,
            stdio: 'inherit',
        });

        onClose(child, resolve, reject);
    });
}


/**
 * Add a project name to the list of projects
 * @return {Promise} A promise indicating success/failure of the action
 */
exports.addToProjects = function() {
    return new Promise((resolve, reject) => {
        const file = fs.readFileSync(paths.projects);
        const list = JSON.parse(file);

        fs.writeFileSync(
            paths.projects,
            JSON.stringify([...new Set([...list, projectDir])]),
        );

        resolve();
    });
};

/**
 * Create a project folder
 * @return {Promise} A promise indicating success/failure of the action
 */
exports.makeProjectFolder = function() {
    return new Promise((resolve, reject) => {
        const projectPath = path.join(paths.root, projectDir, 'src');
        createNestedDir(path.join(projectPath, paths.root));
        resolve();
    });
};

/**
 * Create or clone a clasp project
 * @return {Promise} A promise indicating success/failure of the action
 */
exports.provideClaspProject = function() {
    if (scriptId) {
        return cloneClaspProject();
    } else {
        return createClaspProject();
    }
};
