const logAnalyzer = require('./logAnalyzer')();

describe('isValidLogFileName', () => {
    it('bad extension returns false', () => {
        const result = logAnalyzer.isValidLogFileName('johndoe.js');
        expect(result).toBe(false);
    });

    it('good extension in lowercase returns true', () => {
        const result = logAnalyzer.isValidLogFileName('johndoe.slf');
        expect(result).toBe(true);
    });

    it('good extension in uppercase returns true', () => {
        const result = logAnalyzer.isValidLogFileName('johndoe.SLF');
        expect(result).toBe(true);
    });
});
