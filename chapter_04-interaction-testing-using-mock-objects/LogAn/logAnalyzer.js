const ArgumentError = require('./errors/ArgumentError');

function logAnalyzer(extensionManager) {
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

        const result = await extensionManager.isValid(fileName);

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
