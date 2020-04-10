var fs = require("fs");
var http = require("http");
var url = require("url");
function start() {
function onRequest(request, response) {
    var page = fs.readFileSync('hello.html');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(page);
    
    var params = url.parse(request.url).search;
    if (params != null)
    {
    params = params.match(new RegExp('[^&?]+', 'gm')); 
    var result = {};
    for (var i=0; i < params.length; i++) {
      var r = params[i].split('=');
      result[r[0]] =r[1];
    }
    var a = String(result['a']);
    var b = String(result['b']);
    var sum = a + b;
    }
    response.end('Резельтат GET: ' + sum);
}
http.createServer(onRequest).listen(8888);
}
exports.start = start;