const gulpPlumber = require('gulp-plumber');


module.exports = function() {
    return gulpPlumber({ errorHandler: console.error });
};
