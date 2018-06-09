exports.onClose = function(child, resolve, reject) {
    child.on('close', code => {
        if (!code) {
            resolve();
        } else {
            reject(code);
        }
    });
};
