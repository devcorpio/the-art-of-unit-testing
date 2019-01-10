const fs = require('fs');
const util = require('util');
const ArgumentError = require('./ArgumentError');

const readFilePromisied = util.promisify(fs.readFile);

function logAnalyzer() {
    /**
     * @type {boolean}
     */
    let wasLastFileNameValid;

    /**
     * @return {boolean}
     */
    function getWasLastFileNameValid() {
        return wasLastFileNameValid;
    }

    /**
     * @param {string} fileName
     * @return {Promise}
     */
    async function isValidLogFileName(fileName) {
        wasLastFileNameValid = false;

        if (fileName === '') {
            throw new ArgumentError('filename has to be provided');
        }

        const result = await isValid(fileName);

        if (!result) {
            return false;
        }

        wasLastFileNameValid = true;
        return true;
    }

    /**
     * @param {string} fileName
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
        getWasLastFileNameValid,
        isValidLogFileName,
    };
}

module.exports = logAnalyzer;
