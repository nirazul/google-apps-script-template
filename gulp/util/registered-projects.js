const projects = require('../config/projects');
const { throwPluginError } = require('./throw-plugin-error');

const hasRegisteredProjects = projects.length;

exports.throwOnNoRegisteredProjects = function(taskName) {
  if (hasRegisteredProjects) {
    return;
  }

  const error = new Error(`You must register at least one project in 'gulp/config/projects' when using this task: '${ taskName }'`)
  throwPluginError(error);
};
