var vanadium = require('./vanadium');

var client = new vanadium('http://localhost:9000/json');
client.connect();
