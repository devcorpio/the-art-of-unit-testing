let loggingFacility = require('../loggingFacility');

function fakeTheLogger() {
    loggingFacility.setLogger(function fakeLogger(value) {
        return value;
    });
}

function tearDown() {
    loggingFacility.setLogger(null);
}

module.exports = {
    fakeTheLogger,
    tearDown,
};
