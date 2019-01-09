const ArgumentError = require('./ArgumentError');

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
     * @return {boolean}
     */
    function isValidLogFileName(fileName) {
        wasLastFileNameValid = false;

        if (fileName === '') {
            throw new ArgumentError('filename has to be provided');
        }

        if (!fileName.toUpperCase().endsWith('.SLF')) {
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
