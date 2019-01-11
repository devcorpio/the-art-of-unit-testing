function alwaysValidFakeExtensionManager() {
    /**
     * @param {string} fileName
     */
    function isValid(fileName) {
        return true;
    }

    return {
        isValid,
    };
}

module.exports = alwaysValidFakeExtensionManager;
