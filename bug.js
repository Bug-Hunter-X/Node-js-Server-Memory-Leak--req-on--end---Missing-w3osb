const http = require('http');

const server = http.createServer((req, res) => {
  // Without this line the server will not close
  // even if you use server.close()
  req.on('end', () => {
    res.writeHead(200);
    res.end('Hello World!');
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//The server will never close without this line, even if you call server.close() in a different part of your code.
//This can lead to memory leaks and other issues over time.
