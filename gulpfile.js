const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const undertakerForwardReference = require('undertaker-forward-reference');

// NOTE: Allow tasks to be referenced in any order
gulp.registry(undertakerForwardReference());

// NOTE: Load all tasks
const tasksDir = path.join(__dirname, 'gulp/tasks');
fs.readdirSync(tasksDir).forEach(file => require(path.join(tasksDir, file)));
