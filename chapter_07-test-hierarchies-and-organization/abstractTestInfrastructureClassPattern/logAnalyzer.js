const loggingFacility = require('./loggingFacility');

function logAnalyzer() {
    /**
     * @param {string} fileName
     */
    function analyze(fileName) {
        if (fileName.length < 8) {
            loggingFacility.log(`Filename too short: ${fileName}`);
        }
    }

    return {
        analyze,
    };
}

module.exports = logAnalyzer;
