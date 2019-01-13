const configurationManagerFactory = require('./configurationManager');
const { fakeTheLogger, tearDown } = require('./testsUtils/baseTests');

describe('isConfigured', () => {
    it('logging file check', () => {
        fakeTheLogger();
        const configurationManager = configurationManagerFactory();
        configurationManager.isConfigured('');
    });

    afterEach(tearDown);
});
