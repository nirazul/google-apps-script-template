const path = require('path');

const { types, name, assetsDirName } = require('../util/env');
const { 'project-dir': projectDir } = require('../util/args');

const root = exports.root = path.resolve(__dirname, '..', '..');
const src = exports.src = (projectDir ? path.join(root, projectDir, 'src') : null);
const dest = exports.dest = (projectDir ? path.join(root, projectDir, 'dist') : null);
