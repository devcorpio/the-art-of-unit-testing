const logAnalyzerFactory = require('./logAnalyzer');
const loggingFacility = require('./loggingFacility');

describe('analyze', () => {
    it('empty file throws exception', () => {
        const logAnalyzer = logAnalyzerFactory();
        logAnalyzer.analyze('');
    });

    afterEach(() => {
        loggingFacility.setLogger(null);
    });
});
