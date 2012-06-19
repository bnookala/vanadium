var request = require('request');
var tab = require('./lib/tab');

var vanadium = function (host) {
    if (!host) {
        console.log("No host specified - exiting");
        process.exit(1);
    }

    if (typeof host !== 'string') {
        console.log("Type mismatch: host location is not a string - exiting");
        process.exit(1);
    }

    this.host = host;
};

vanadium.prototype._availableDebuggers = [];

vanadium.prototype.connect = function (callback) {
    var context = this;

    try {
        request(this.host, function (err, resp, body) {
            if (err !== null) {
                console.log(err);
                process.exit(1);
            }

            try {
                var contents = JSON.parse(body);
            } catch (e) {
                console.log(e);
                process.exit(1);
            }

            if (contents.length === 0) {
                console.log("No remote tabs open");
                process.exit(1);
            }

            context._availableDebuggers = contents;
            callback(contents);
        });
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};

vanadium.prototype.debug = function (tabIndex, readyCallback) {
    if (typeof tabIndex !== 'number') {
        console.log("Type mismatch: tab index is not a number - exiting");
        process.exit(1);
    }

    var tabRep = this._availableDebuggers[tabIndex];
    if (!tabRep) {
        console.log("No tab found with provided tabindex - exiting");
        process.exit(1);
    }

    return new tab('localhost', '9000', tabRep['webSocketDebuggerUrl'], readyCallback);
};

module.exports = vanadium;
