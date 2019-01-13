const logAnalyzerFactory = require('./logAnalyzer');
const { fakeTheLogger, tearDown } = require('./testsUtils/baseTests');

describe('analyze', () => {
    it('empty file throws exception', () => {
        fakeTheLogger();
        const logAnalyzer = logAnalyzerFactory();
        logAnalyzer.analyze('');
    });

    afterEach(tearDown);
});
