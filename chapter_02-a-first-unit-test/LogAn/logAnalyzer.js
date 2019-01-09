function logAnalyzer() {
    /**
     * @param {string} fileName
     * @return {boolean}
     */
    function isValidLogFileName(fileName) {
        if (fileName.endsWith('.SLF')) {
            return false;
        }

        return true;
    }

    return {
        isValidLogFileName,
    };
}

module.exports = logAnalyzer;
