let logger = console.log;

function log(text) {
    logger(text);
}

function getLogger() {
    return logger;
}

function setLogger(value) {
    logger = value;
}

module.exports = {
    log,
    getLogger,
    setLogger,
};
