const fs = require('fs');
const fancyLog = require('fancy-log');
const PluginError = require('plugin-error');

const paths = require('../config/paths');

const targetProjectExists = exports.targetProjectExists = fs.existsSync(paths.src);

const throwPluginError = exports.throwPluginError = function(pluginName, error) {
  throw new PluginError('google-app-script-template', error, { showStack: true });
}

exports.throwOnInvalidTargetProject = function(taskName) {
  if (targetProjectExists) {
    return;
  }

  throwPluginError(new Error(`You must specify an existing target project with '--project-dir="path/to/projectfolder"' when using this task: '${ taskName }'`));
};

