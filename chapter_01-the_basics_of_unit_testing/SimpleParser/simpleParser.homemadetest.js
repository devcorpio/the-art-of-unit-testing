const simpleParser = require('./simpleParser');

function returnsZeroWhenEmptyString() {
    try {
        const p = simpleParser();
        const result = p.parseAndSum('');
        if (result !== 0) {
            console.error(`***** returnsZeroWhenEmptyString *****:
                -------
                Parse and sum should have returned 0 on an empty string
            `);
        }
    } catch (e) {
        console.error(e);
    }
}

function returnsNumberWhenSendOneNumber() {
    try {
        const p = simpleParser();
        const result = p.parseAndSum('1');
        if (Number.isNaN(result)) {
            console.error(`***** returnsNumberWhenSendOneNumber *****:
                -------
                Parse and sum should have returned a Number
            `);
        }
    } catch (e) {
        console.error(e);
    }
}

returnsZeroWhenEmptyString();
returnsNumberWhenSendOneNumber();
