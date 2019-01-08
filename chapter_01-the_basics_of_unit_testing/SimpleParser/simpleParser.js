const InvalidOperationError = require('./InvalidOperationError');

function simpleParser() {
    /**
     * @param {string} numbers
     * @return {number}
     */
    function parseAndSum(numbers) {
        if (numbers.length === 0) {
            return 0;
        }
        if (!numbers.includes(',')) {
            return Number(numbers);
        } else {
            throw new InvalidOperationError(
                'I can only handle 0 or 1 numbers for now!'
            );
        }
    }

    return {
        parseAndSum,
    };
}

module.exports = simpleParser;
