var Vanadium = require('./vanadium');

var connection = new Vanadium('http://localhost:9000/json');
connection.connect(test_func);

function test_func (contents) {
    connection.debug(0);
}
