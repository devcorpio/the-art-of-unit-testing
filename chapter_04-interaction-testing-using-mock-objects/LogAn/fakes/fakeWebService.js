function fakeWebService() {
    let lastError;

    /**
     * @param {string} message
     */
    function logError(message) {
        lastError = message;
    }
}

module.exports = fakeWebService;
