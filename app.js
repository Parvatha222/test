const http = require('http');
const port = 8080;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello from Docker!');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`Server is listening on ${port}`);
});

