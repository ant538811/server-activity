var http = require('http');
function handleRequest(req, res) {
	res.end("This is port 7000" + req.url);
	console.log("Port 7000");
};
function handleRequest2(req, res) {
	res.end("This is port 7050" + req.url);
	console.log("Port 7050");
};


var server = http.createServer(handleRequest).listen(7000);
var server2 = http.createServer(handleRequest2).listen(7050);
