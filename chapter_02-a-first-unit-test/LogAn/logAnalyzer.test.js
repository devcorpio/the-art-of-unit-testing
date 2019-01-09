const logAnalyzer = require('./logAnalyzer')();

describe.each([
    ['johndoe.js', false],
    ['johndoe.slf', true],
    ['johndoe.SLF', true],
])('isValidLogFileName("%s"))', (fileName, expected) => {
    it(`bad extension returns ${expected}`, () => {
        const result = logAnalyzer.isValidLogFileName(fileName);
        expect(result).toBe(expected);
    });
});
