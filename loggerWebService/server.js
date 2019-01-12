const http = require('http');

const server = http.createServer(function getRequest(request, response) {
    if (request.method !== 'POST') {
        response.statusCode = 405;
        return response.end();
    }

    request.setEncoding('utf8');

    let data = '';

    request.on('data', function getData(chunk) {
        data += chunk;
    });

    request.on('end', function getServerResponse() {
        console.log(
            `Writing the error in the stdout, waiting that an hipotetic tool like influxdb read the info and save it:
            ${data}
            `
        );
        response.statusCode = 201;
        response.end();
    });
});

module.exports = server;
