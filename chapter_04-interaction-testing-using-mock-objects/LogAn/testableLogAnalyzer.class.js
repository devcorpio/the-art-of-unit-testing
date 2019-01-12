const fakeExtensionManagerFactory = require('./fakeExtensionManager');
const logAnalizer = require('./logAnalyzer.class');

class TestableLogAnalyzer extends logAnalizer {
    constructor(extensionManager) {
        super();
        this.manager = extensionManager;
    }
    getManager() {
        return this.manager;
    }
}

module.exports = TestableLogAnalyzer;
