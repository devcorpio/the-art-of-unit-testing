const logAnalyzer = require('./logAnalyzer');

let logAnalyzerInstance;
beforeEach(() => {
    logAnalyzerInstance = logAnalyzer();
});

describe.each([
    ['johndoe.js', false],
    ['johndoe.slf', true],
    ['johndoe.SLF', true],
])('isValidLogFileName("%s"))', (fileName, expected) => {
    it(`bad extension returns ${expected}`, () => {
        const result = logAnalyzerInstance.isValidLogFileName(fileName);
        expect(result).toBe(expected);
    });
});

describe('isValidLogFileName', () => {
    it('empty filename throws error', () => {
        function emptyLogFileName() {
            logAnalyzerInstance.isValidLogFileName('');
        }

        expect(emptyLogFileName).toThrow('filename has to be provided');
    });
});
