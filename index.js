const http = require('http');
// =====
const app = require('./src/app');


const PORT = 5000;
const HOST_NAME = '127.0.0.1';
const IS_SECURE = false;


const server = http.createServer(app);

server.listen(PORT, HOST_NAME, () => {
    console.log(`Server running at http${IS_SECURE ? "s" : ""}://${HOST_NAME}:${PORT}`);
})
