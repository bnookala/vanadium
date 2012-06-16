var request = require('request');
var WebSocketClient = require('websocket').client;
//var vanadium = require('./vanadium');

//console.log(vanadium);
//var test = new vanadium.Vanadium();
//test.test();

request('http://localhost:9000/json', function (err, response, body) {
	var response = JSON.parse(body);
	var ws_uri = response[0]['webSocketDebuggerUrl'];
	var socket = new WebSocketClient();
	socket.connect('ws://localhost:9000/devtools/page/15_1');
	socket.on('connect', function (connection) {
		console.log('connected');

		connection.on('message', function (message) {
			console.log(message);
		});

		connection.on('error', function () {
			console.log(error);
		});

		function sendTestPackage () {
			var json_pkg = {
				"id": 1,
				"method": "Runtime.evaluate",
				"params": {
					"expression": "alert('omg');",
				},
			};

			var json_string = JSON.stringify(json_pkg);
			console.log(json_pkg);
			connection.sendUTF(json_string);
		};

		sendTestPackage();
	});
});
