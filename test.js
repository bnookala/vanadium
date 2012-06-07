var request = require('request');
var vanadium = require('./vanadium');

console.log(vanadium);
var test = new vanadium();
test.test();

request('http://localhost:9000/json', function (err, response, body) {
	console.log(body);
});
