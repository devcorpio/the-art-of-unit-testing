const logAnalyzerFactory = require('./logAnalyzer');
const fakeExtensionManagerFactory = require('./fakeExtensionManager');

let myFakeExtensionManager;

beforeEach(() => {
    myFakeExtensionManager = fakeExtensionManagerFactory();
});

describe.each([
    ['johndoe.js', false],
    ['johndoe.slf', true],
    ['johndoe.SLF', true],
])('isValidLogFileName("%s"))', (fileName, expected) => {
    it(`bad extension returns ${expected}`, async () => {
        myFakeExtensionManager.willBeValid(expected);

        const logAnalyzer = logAnalyzerFactory(myFakeExtensionManager);
        const result = await logAnalyzer.isValidLogFileName(fileName);
        expect(result).toBe(expected);
    });
});

describe('isValidLogFileName', () => {
    it('empty filename throws error', async () => {
        async function emptyLogFileName() {
            const logAnalyzer = logAnalyzerFactory(myFakeExtensionManager);

            return logAnalyzer.isValidLogFileName('');
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
            myFakeExtensionManager.willBeValid(expected);

            const logAnalyzer = logAnalyzerFactory(myFakeExtensionManager);
            await logAnalyzer.isValidLogFileName(fileName);
            const result = logAnalyzer.getWasLastFileNameValid();

            expect(result).toBe(expected);
        }
    );
});
