const path = require('path');

const { types, name, assetsDirName } = require('../util/env');
const { 'project-dir': projectDir } = require('../util/args');

const root = exports.root = path.resolve(__dirname, '..', '..');
const src = exports.src = (projectDir ? path.join(root, projectDir, 'src') : root);
const dest = exports.dest = (projectDir ? path.join(root, projectDir, 'dist') : root);
const projects = exports.projects = path.join(root, 'gulp/config/projects.json');
