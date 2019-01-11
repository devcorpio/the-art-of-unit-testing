function fakeExtensionManager() {
    /**
     * @type {boolean}
     */
    let valid = false;

    function willBeValid(value) {
        valid = value;
    }

    /**
     * @param {string} fileName
     */
    function isValid(fileName) {
        return valid;
    }

    return {
        willBeValid,
        isValid,
    };
}
module.exports = fakeExtensionManager;
