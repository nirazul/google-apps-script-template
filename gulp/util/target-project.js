const fs = require('fs');

const paths = require('../config/paths');
const { throwPluginError } = require('./throw-plugin-error');

const targetProjectExists = fs.existsSync(paths.src);

exports.throwOnInvalidTargetProject = function(taskName) {
  if (targetProjectExists) {
    return;
  }

  const error = new Error(`You must specify an existing target project with '--project-dir="path/to/projectfolder"' when using this task: '${ taskName }'`);
  throwPluginError(error);
};
