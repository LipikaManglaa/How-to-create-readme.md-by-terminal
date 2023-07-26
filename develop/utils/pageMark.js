const fs = require('fs');


const writeFile = fileCreateContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./output/README.md', fileCreateContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File sucessfully Created!'
            });
        });
    });
};

module.exports = writeFile;