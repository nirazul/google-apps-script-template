const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const paths = require('../../config/paths');
const { 'project-dir': projectDir, 'script-id': scriptId } = require('../../util/args');
const { onClose } = require('../../util/handle-child-process');


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
            JSON.stringify([...list, projectDir]),
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
        const projectPath = path.join(paths.root, projectDir);

        fs.mkdirSync(projectPath);
        fs.mkdirSync(path.join(projectPath, 'src'));

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
