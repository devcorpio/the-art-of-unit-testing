const server = require('./server');
const port = process.env.PORT || 3000;

server.listen(port, function startServer() {
    console.log(
        `Webservice is ready to start listening requests on http://localhost:${port}`
    );
});
