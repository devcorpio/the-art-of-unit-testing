const logAnalyzer = require('./logAnalyzer');

describe.each([
    ['johndoe.js', false],
    ['johndoe.slf', true],
    ['johndoe.SLF', true],
])('isValidLogFileName("%s"))', (fileName, expected) => {
    let logAnalyzerInstance;
    beforeEach(() => {
        logAnalyzerInstance = logAnalyzer();
    });

    it(`bad extension returns ${expected}`, () => {
        const result = logAnalyzerInstance.isValidLogFileName(fileName);
        expect(result).toBe(expected);
    });
});
