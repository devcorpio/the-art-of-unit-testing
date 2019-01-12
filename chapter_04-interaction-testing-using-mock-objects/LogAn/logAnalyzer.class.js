const ArgumentError = require('./errors/ArgumentError');
const fileExtensionManagerFactory = require('./fileExtensionManager');

class LogAnalyzer {
    constructor() {
        /**
         * @type {boolean}
         */
        this.wasLastFileNameValid = false;
    }
    /**
     * @return {boolean}
     */
    getWasLastFileNameValid() {
        return this.wasLastFileNameValid;
    }

    /**
     * a virtual function created to use "Extract and Override" technique
     */
    getManager() {
        return fileExtensionManagerFactory();
    }

    /**
     * @param {string} fileName
     * @return {Promise}
     */
    async isValidLogFileName(fileName) {
        this.wasLastFileNameValid = false;

        if (fileName === '') {
            throw new ArgumentError('filename has to be provided');
        }

        const result = await this.getManager().isValid(fileName);

        if (!result) {
            return false;
        }

        this.wasLastFileNameValid = true;
        return true;
    }
}

module.exports = LogAnalyzer;
