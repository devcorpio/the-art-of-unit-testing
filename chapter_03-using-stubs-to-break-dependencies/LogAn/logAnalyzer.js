const ArgumentError = require('./ArgumentError');
const fileExtensionManagerFactory = require('./fileExtensionManager');

const fileExtensionManager = fileExtensionManagerFactory();

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

        const result = await fileExtensionManager.isValid(fileName);

        if (!result) {
            return false;
        }

        wasLastFileNameValid = true;
        return true;
    }

    return {
        getWasLastFileNameValid,
        isValidLogFileName,
    };
}

module.exports = logAnalyzer;
