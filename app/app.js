const http = require("http");
const port = 8080;

http.createServer((req, res) => {
  res.end("Hello from Kubernetes!");
}).listen(port);

console.log("Server running...");
