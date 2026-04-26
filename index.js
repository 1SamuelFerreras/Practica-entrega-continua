const http = require('http');
http.createServer((req, res) => {
  res.end('Hola Mundo - DevOps desde Codespaces');
}).listen(8080);