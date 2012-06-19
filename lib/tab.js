var WebSocket = require('faye-websocket');

var tab = function (host, port, socketURI, readyCallback) {
	if (host && port) {
		var protocol = socketURI.slice(0, 5)
		var path = socketURI.slice(5, socketURI.length)
		var fullPath = protocol + host + ":" + port + path;
		this._socketURI = fullPath;
	} else {
		this._socketURI = socketURI;
	}
	console.log(this._socketURI)
	this._socket = new WebSocket.Client(this._socketURI);

	this._socket.onopen = function (event) {
		console.log('opened socket');
		readyCallback(this);
	};

	this._socket.onerror = function (event) {
		console.log(event);
	}
};

tab.prototype_socketURI = undefined;

module.exports = tab;

