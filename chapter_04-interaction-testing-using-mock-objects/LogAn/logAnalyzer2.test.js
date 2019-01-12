const logAnalyzer2Factory = require('./logAnalyzer2');

// this fake right now will be used as a stub
const fakeThrowsErrorWebServiceFactory = require('./fakes/fakeThrowsErrorWebService');

// this fake right now will be used as a mock
const fakeEmailFactory = require('./fakes/fakeEmailService');

describe('analyze', () => {
    let fakeThrowsErrorWebWebService;
    let fakeEmailService;
    beforeEach(() => {
        fakeThrowsErrorWebWebService = fakeThrowsErrorWebServiceFactory();
        fakeEmailService = fakeEmailFactory();
    });

    it('too short file calls webService', () => {
        const logAnalyzer = logAnalyzer2Factory(
            fakeThrowsErrorWebWebService,
            fakeEmailService
        );

        const expectedMessage = "can't log";

        logAnalyzer.analyze('johndoe');
        expect(fakeEmailService.getLastMessage()).toBe(expectedMessage);
    });
});
