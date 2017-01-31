console.log("Program Starting");

var http = require("http");
var events = require("events");


var eventEmitter = new events.EventEmitter();

var listener = function listener(){
	console.log('listener executed');
}

eventEmitter.addListener('connection', listener);

//Create an event handler 
var connectHandler = function connected(){
	console.log('connection succesful.');
	
	//fire event
	eventEmitter.emit('data_received');
}

//bind  the connection event with the handler
eventEmitter.on('connection',connectHandler);

//bind the data receive event with the anonymous function

eventEmitter.on('data_received',function(){
	console.log('data recieved\n');	
});

eventEmitter.emit('connection');
eventEmitter.removeListener('connection',listener);
eventEmitter.emit('connection');
console.log("Program ended");

/*http.createServer(function(request, response){
	//send http header
	//status 200 : OK
	//content type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	//send the response body as "whats good"
	response.end('whats good\n');
}).listen(8081);

console.log('server running at http://127.0.0.1:8081/');
*/
