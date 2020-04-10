var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/action1"] = requestHandlers.action1;
handle["/action2"] = requestHandlers.action2;
handle["/action3"] = requestHandlers.action3;

server.start(router.route, handle);