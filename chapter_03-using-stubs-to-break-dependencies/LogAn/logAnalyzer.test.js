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
    it(`bad extension returns ${expected}`, async () => {
        const result = await logAnalyzerInstance.isValidLogFileName(fileName);
        expect(result).toBe(expected);
    });
});

describe('isValidLogFileName', () => {
    it('empty filename throws error', async () => {
        async function emptyLogFileName() {
            return logAnalyzerInstance.isValidLogFileName('');
        }

        await expect(emptyLogFileName()).rejects.toThrow(
            'filename has to be provided'
        );
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
        async ({ fileName, expected }) => {
            await logAnalyzerInstance.isValidLogFileName(fileName);
            const result = logAnalyzerInstance.getWasLastFileNameValid();

            expect(result).toBe(expected);
        }
    );
});
