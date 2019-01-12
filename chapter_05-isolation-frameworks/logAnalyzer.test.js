const logAnalyzerFactory = require('./logAnalyzer');

const fakeWebServiceFactory = require('./fakes/fakeWebService');

let myFakeExtensionManager;

describe('analyze', () => {
    let fakeWebService;
    beforeEach(() => {
        fakeWebService = fakeWebServiceFactory();
    });

    it('too short file calls webService', () => {
        const logAnalyzer = logAnalyzerFactory(
            myFakeExtensionManager,
            fakeWebService
        );

        const fileName = 'johndoe';
        const expectedMessage = `Filename too short: ${fileName}`;

        logAnalyzer.analyze(fileName);
        expect(fakeWebService.getLastError()).toBe(expectedMessage);
    });
});
