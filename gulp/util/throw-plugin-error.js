const PluginError = require('plugin-error');

exports.throwPluginError = function(error) {
    throw PluginError('google-apps-script-template', error, { showStack: true });
};
