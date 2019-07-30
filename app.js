const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 8080;


var server = http.createServer(function(req, res) {
var page = url.parse(req.url).pathname;
console.log(`Server running at http://${hostname}:${port}/`);
console.log(page);
 res.writeHead(200, {"Content-Type": "text/plain"});
 
 if (page == '/') {
   res.write('This is homepage');
 }
 else if (page == '/dir1') {
  res.write('Welcome to dir1, how can I help you ?');
 }
 else if (page == '/dir2/person/1') {
  res.write('The information about person with id 1 is X');
 }
 res.end();

});
server.listen(8080);

