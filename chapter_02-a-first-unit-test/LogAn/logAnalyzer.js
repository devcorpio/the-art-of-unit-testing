const ArgumentError = require('./ArgumentError');

function logAnalyzer() {
    /**
     * @param {string} fileName
     * @return {boolean}
     */
    function isValidLogFileName(fileName) {
        if (fileName === '') {
            throw new ArgumentError('filename has to be provided');
        }

        if (!fileName.toUpperCase().endsWith('.SLF')) {
            return false;
        }

        return true;
    }

    return {
        isValidLogFileName,
    };
}

module.exports = logAnalyzer;
