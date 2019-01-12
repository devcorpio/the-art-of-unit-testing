const fs = require('fs');
const util = require('util');

const readFilePromisied = util.promisify(fs.readFile);

function fileExtensionManager() {
    /**
     * @param {string} fileName
     * @return {Promise}
     */
    async function isValid(fileName) {
        const fileNameExtensions = await readFilePromisied(
            `${__dirname}/fileNameExtensions.config.json`,
            'utf8'
        ).then(fileContent => JSON.parse(fileContent).extensions);

        const isValidExtension = fileNameExtensions.some(
            function checkFileNameExtension(extension) {
                if (
                    fileName
                        .toUpperCase()
                        .endsWith(`.${extension.toUpperCase()}`)
                ) {
                    return true;
                }

                return false;
            }
        );

        return isValidExtension;
    }

    return {
        isValid,
    };
}

module.exports = fileExtensionManager;
