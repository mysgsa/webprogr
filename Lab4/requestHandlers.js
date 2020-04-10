function start() 
{
    console.log("Request handler 'start' was called.");
}
function upload() 
{
    console.log("Request handler 'upload' was called.");
}
function action1()
{
    console.log("Request handler 'action1' was called.");
}
function action2()
{
    console.log("Request handler 'action2' was called.");
}
function action3()
{
    console.log("Request handler 'action3' was called.");
}
exports.start = start;
exports.upload = upload;
exports.action1 = action1;
exports.action2 = action2;
exports.action3 = action3;