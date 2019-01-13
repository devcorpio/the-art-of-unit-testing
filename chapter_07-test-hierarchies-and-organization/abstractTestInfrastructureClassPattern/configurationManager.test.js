const configurationManagerFactory = require('./configurationManager');
const loggingFacility = require('./loggingFacility');

describe('isConfigured', () => {
    it('logging file check', () => {
        const configurationManager = configurationManagerFactory();
        configurationManager.isConfigured('');
    });

    afterEach(() => {
        loggingFacility.setLogger(null);
    });
});
