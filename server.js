// var http = require('http');
var express = require('express');
var bodyParser = require('body-parser')
var port = 8081;
var app = express();

app.listen(port, function() {
	console.log('doing stuff', "---" + port + "---", "this " + port + " biz")
});

app.use(bodyParser());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', function(req, res) {
	res.type('application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.send(JSON.stringify(messages));
});

app.post('/', function(req, res) {
	messages.push(req.body);
	res.send();
});

app.options('/', function(req, res) {
	res.send();
});

var messages = [{text:'hey bae', date: 'literally three seconds ago'}];

// var onRequest = function(req, res) {
// 	if (req.method === 'GET') {
// 		res.writeHead(200, 'ok', {
// 			'Connection': 'close',
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*',
// 			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
// 			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
// 		});
// 		res.end(JSON.stringify(messages))
// 	}
// 	if (req.method === 'POST') {
// 		var postData = '';
// 		req.on('data', function(chunk) {
// 			postData += chunk.toString();
// 		});
// 		req.on('end', function() {
// 			console.log('got POST data: ', postData);
// 			messages.push(JSON.parse(postData));
// 		});
// 		res.writeHead(201, 'just ok', {
// 			'Connection': 'close',
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*',
// 			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
// 			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
// 		});
// 		res.end(JSON.stringify(messages))
// 	}
// 	if(req.method === 'OPTIONS'){
// 		res.writeHead(201, 'just ok', {
// 			'Connection': 'close',
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*',
// 			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
// 			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
// 		});
// 		res.end()
// 	}
// }

// var server = http.createServer(onRequest).listen(port);