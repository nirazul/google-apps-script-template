const path = require('path');
const { 'project-dir': projectDir } = require('../util/args');

const root = exports.root = path.resolve(__dirname, '..', '..');
exports.src = (projectDir ? path.join(root, projectDir, 'src') : path.join(root, 'dummy'));
exports.dest = (projectDir ? path.join(root, projectDir, 'dist') : path.join(root, 'dummy'));
exports.projectDirs = path.join(root, 'gulp/config/projects.json');
