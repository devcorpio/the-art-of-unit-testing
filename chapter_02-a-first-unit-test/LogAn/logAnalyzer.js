function logAnalyzer() {
    /**
     * @param {string} fileName
     * @return {boolean}
     */
    function isValidLogFileName(fileName) {
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
