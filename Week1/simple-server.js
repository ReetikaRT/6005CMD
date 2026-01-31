const http = require("http");
const server = http.createServer((req, res) => {
 // req = Request (what the browser sent us)
 // res = Response (what we send back)

 console.log("Request received for:", req.url);
 if (req.url === "/") {
 res.writeHead(200, { "Content-Type": "text/plain" });
 res.end("Welcome to the Home Page");
 } else if (req.url === "/about") {
 res.writeHead(200, { "Content-Type": "text/plain" });
 res.end("About this API");
 } else {
 res.writeHead(404, { "Content-Type": "text/plain" });
 res.end("Page Not Found");
 }
});
server.listen(3000, () => {
 console.log("Server running at http://localhost:3000");
});
