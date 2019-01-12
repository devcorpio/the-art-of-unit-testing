function logAnalyzer2(webService, emailService) {
    /**
     * @param {string} fileName
     */
    function analyze(fileName) {
        if (fileName.length < 8) {
            try {
                webService.logError(`Filename too short: ${fileName}`);
            } catch (e) {
                emailService.sendEmail("can't log");
            }
        }
    }

    return {
        analyze,
    };
}

module.exports = logAnalyzer2;
