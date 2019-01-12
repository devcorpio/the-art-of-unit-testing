function alwaysValidFakeExtensionManager() {
    /**
     * @param {string} fileName
     * @return {Promise}
     */
    async function isValid(fileName) {
        return true;
    }

    return {
        isValid,
    };
}

module.exports = alwaysValidFakeExtensionManager;
