console.log("Program Starting");

var http = require("http");
var events = require("events");
var pixi = require("pixi.js");

http.createServer(function(request, response){
	//send http header
	//status 200 : OK
	//content type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	//send the response body as "whats good"
	response.end('whats good\n');
}).listen(8081);

console.log('server running at http://127.0.0.1:8081/');
var type = "WebGL"
pixi.utils.sayHello(type)

//Auto detect canvas Drawing API or WebGL for render
var renderer = pixi.autoDetectRenderer(800, 600); //antialiasing?
document.body.appendChild(renderer.view);
//create container object stage
var stage = new pixi.Container();
renderer.backgroundColor =0xccffff; 
renderer.render(stage);

pixi.loader
  .add("images/Ryu1.png")
  .load(setup);

function setup(){
  var Ryu1 = new pixi.Sprite(
  pixi.loader.resources["images/Ryu1.png"].texture	
  );
  stage.addChild(Ryu1);
  renderer.render(stage);
}
