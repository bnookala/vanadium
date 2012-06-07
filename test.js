var request = require('request');

request('http://localhost:9000/json', function (err, response, body) {
	console.log(body);
});
