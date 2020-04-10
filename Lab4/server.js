var fs = require("fs");
var http = require("http");
var url = require("url");
function start(route, handle) {
  function onRequest(request, response) {      
    
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received");
    route(handle, pathname);
    
    var page = fs.readFileSync('hello.html');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(page);
    response.end();
  }
http.createServer(onRequest).listen(8888);
}
exports.start = start;