var http = require('http');

http.createServer(function (req, res) {
  res.send("Hello world!!!");
}).listen(3000);

console.log("Server is up and running!!");
