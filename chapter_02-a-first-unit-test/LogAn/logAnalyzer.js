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
}

module.exports = logAnalyzer;
