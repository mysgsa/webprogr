var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/delfin"] = requestHandlers.delfin;
handle["/dikobraz"] = requestHandlers.dikobraz;
handle["/drozd"] = requestHandlers.drozd;

server.start(router.route, handle);