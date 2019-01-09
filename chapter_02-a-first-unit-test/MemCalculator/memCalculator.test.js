const memCalculator = require('./memCalculator');

let memCalculatorInstance;
beforeEach(() => {
    memCalculatorInstance = memCalculator();
});

describe('result', () => {
    it('by default returns zero', () => {
        const lastResult = memCalculatorInstance.result();
        expect(lastResult).toBe(0);
    });

    it('changes when call add', () => {
        const expectedResult = 12;

        memCalculatorInstance.add(5);
        memCalculatorInstance.add(7);

        const lastResult = memCalculatorInstance.result();

        expect(lastResult).toBe(expectedResult);
    });
});
