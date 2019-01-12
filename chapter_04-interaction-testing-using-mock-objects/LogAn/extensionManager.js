const fileExtensionManagerFactory = require('./fileExtensionManager');

function extensionManager() {
    let customManager = null;

    function create() {
        if (customManager !== null) {
            return customManager;
        }

        return fileExtensionManagerFactory();
    }

    function setManager(manager) {
        customManager = manager;
    }

    return {
        create,
        setManager,
    };
}

module.exports = extensionManager;
