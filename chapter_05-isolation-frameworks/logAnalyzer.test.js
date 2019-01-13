const logAnalyzerFactory = require('./logAnalyzer');

let myFakeExtensionManager;

describe('analyze', () => {
    let fakeWebService;
    beforeEach(() => {
        fakeWebService = {
            logError: jest.fn(),
        };
    });

    it('too short file calls webService with the correct error message', () => {
        const logAnalyzer = logAnalyzerFactory(
            myFakeExtensionManager,
            fakeWebService
        );

        const fileName = 'johndoe';
        const expectedMessage = `Filename too short: ${fileName}`;

        logAnalyzer.analyze(fileName);
        expect(fakeWebService.logError).toHaveBeenCalledTimes(1);
        expect(fakeWebService.logError).toHaveBeenCalledWith(expectedMessage);
    });
});
