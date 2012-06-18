var Vanadium = require('./vanadium');

var connection = new Vanadium('http://localhost:9000/json');
connection.connect(test_func);

function test_func (contents) {
    var tab = connection.debug(0);
    console.log(tab);
}
