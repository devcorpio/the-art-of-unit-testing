const ArgumentError = require('./errors/ArgumentError');

function logAnalyzer(extensionManager, webService) {
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

    /**
     * @param {string} fileName
     */
    function analyze(fileName) {
        if (fileName.length < 8) {
            webService.logError(`Filename too short: ${fileName}`);
        }
    }

    return {
        getWasLastFileNameValid,
        isValidLogFileName,
        analyze,
    };
}

module.exports = logAnalyzer;
