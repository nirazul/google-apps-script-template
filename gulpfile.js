const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const undertakerForwardReference = require('undertaker-forward-reference');
const { tasks } = require('gaslit-cli');

// NOTE: Allow tasks to be referenced in any order
gulp.registry(undertakerForwardReference());

// NOTE: Load own tasks
const tasksDir = path.join(__dirname, 'gulp/tasks');
fs.readdirSync(tasksDir).forEach(file => require(path.join(tasksDir, file)));

// NOTE: Load gaslit tasks
Object.entries(tasks).forEach(([name, fn]) => fn(gulp, { name }));
