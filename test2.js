var Vanadium = require('./vanadium');

var connection = new Vanadium('http://localhost:9000/json');
connection.connect(test_func);

function test_func (contents) {
    var tab = connection.debug(0, test_fun_on_socket_ready);
}

function test_fun_on_socket_ready (socket) {
    console.log(socket);
    socket.onmessage = function (event) {
        console.log('received something');
        console.log(event);
    };
    socket.send('omg');
    socket
}
