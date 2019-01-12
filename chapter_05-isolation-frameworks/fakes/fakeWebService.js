function fakeWebService() {
    let lastError;

    /**
     * @param {string} message
     */
    function logError(message) {
        lastError = message;
    }

    function getLastError() {
        return lastError;
    }

    return {
        logError,
        getLastError,
    };
}

module.exports = fakeWebService;
