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

    /**
     * an example of state-based testing
     */
    it.each`
        fileName         | expected
        ${'johndoe.foo'} | ${false}
        ${'johndoe.slf'} | ${true}
    `(
        'when called there changes wasLastFileNameValid that returns $expected',
        ({ fileName, expected }) => {
            console.log(fileName);
            logAnalyzerInstance.isValidLogFileName(fileName);
            const result = logAnalyzerInstance.getWasLastFileNameValid();

            expect(result).toBe(expected);
        }
    );
});
