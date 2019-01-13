const loggingFacility = require('./loggingFacility');

function configurationManager() {
    /**
     * @param {string} configName
     */
    function isConfigured(configName) {
        loggingFacility.log(`checking ${configName}`);
    }

    return {
        isConfigured,
    };
}

module.exports = configurationManager;
