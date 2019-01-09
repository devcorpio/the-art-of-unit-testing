const logAnalyzer = require('./logAnalyzer')();

describe('isValidLogFileName', () => {
    it('bad extension returns false', () => {
        const result = logAnalyzer.isValidLogFileName('johndoe.js');
        expect(result).toBe(false);
    });
});
