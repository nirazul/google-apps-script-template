exports.onClose = function(child, resolve, reject) {
    child.on('close', code => {
        if (code) {
            reject(code);
        } else {
            resolve();
        }
    });
};
