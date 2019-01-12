function fakeEmailService() {
    let lastMessage;

    /**
     * @param {string} message
     */
    function sendEmail(message) {
        lastMessage = message;
    }

    function getLastMessage() {
        return lastMessage;
    }

    return {
        sendEmail,
        getLastMessage,
    };
}

module.exports = fakeEmailService;
