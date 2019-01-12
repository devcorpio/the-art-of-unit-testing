function fakeThrowsErrorWebService() {
    /**
     * @param {string} message
     */
    function logError(message) {
        throw new Error("can't log");
    }

    return {
        logError,
    };
}

module.exports = fakeThrowsErrorWebService;
