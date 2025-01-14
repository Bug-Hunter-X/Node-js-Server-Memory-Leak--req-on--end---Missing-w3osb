const http = require('http');

const server = http.createServer((req, res) => {
  req.on('end', () => {
    res.writeHead(200);
    res.end('Hello World!');
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  //Adding a close event listener to handle clean shutdown
  process.on('SIGINT', () => {
    server.close(() => {
      console.log('Server closed gracefully!');
      process.exit(0);
    })
  })
});