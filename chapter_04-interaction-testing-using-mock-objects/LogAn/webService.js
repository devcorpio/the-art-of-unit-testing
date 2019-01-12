const axios = require('axios').default;

function webService() {
    /**
     * @param {string} message
     */
    async function logError(message) {
        return axios({
            method: 'POST',
            url: 'http://localhost:3000',
            data: message,
        });
    }

    return {
        logError,
    };
}

module.exports = webService;
