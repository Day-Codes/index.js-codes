process.on('unhandledRejection', err => console.log(err));

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('The Bot Is Online');
});
server.listen(3000);

