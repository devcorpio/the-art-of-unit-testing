const logAnalyzerFactory = require('./logAnalyzer');
const fakeExtensionManagerFactory = require('./fakes/fakeExtensionManager');
const extensionManagerFactory = require('./extensionManager');

// imported to try the technique "Extract and override"
const TestableLogAnalyzerClass = require('./testableLogAnalyzer.class');

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

    /**
     * an example of use of "injecting a fake just before a method call"
     * right now I'm not injecting a fake, and extensionManager is returning fileExtensionManager,
     * therefore this test is an integration test and not a unit test!!!!
     */
    it('return true using extensionManagerFactory', async () => {
        const extensionManager = extensionManagerFactory();
        const logAnalyzer = logAnalyzerFactory(extensionManager.create());
        const result = await logAnalyzer.isValidLogFileName('johndoe.sql');

        expect(result).toBe(true);
    });

    /**
     * an example of use of "injecting a fake just before a method call"
     * In this case I'm setting a fake extension manager, that converts this in a unit test!!, because
     * right now I have not external dependencies.
     */
    it('return true using extensionManagerFactory', async () => {
        myFakeExtensionManager.willBeValid(true);
        const extensionManager = extensionManagerFactory();
        extensionManager.setManager(myFakeExtensionManager);

        const logAnalyzer = logAnalyzerFactory(extensionManager.create());
        const result = await logAnalyzer.isValidLogFileName('johndoe.sql');

        expect(result).toBe(true);
    });

    /**
     * I'm using the tecnique "Extract and override", this technique has several steps:
     *
     * step 1: create a virtual function in the unit under test(logAnalyzer.js in this case)
     *    that returns the real extension manager, the one that works with the filesystem
     *
     * step 2: create a class that extends of it
     *
     * step3: use this new class to create the tests!! :)
     */
    it('return false using testableLogAnalyzer', async () => {
        const expected = false;
        myFakeExtensionManager.willBeValid(expected);

        const logAnalyzer = new TestableLogAnalyzerClass(
            myFakeExtensionManager
        );
        const result = await logAnalyzer.isValidLogFileName('johndoe.ts');

        expect(result).toBe(expected);
    });
});
