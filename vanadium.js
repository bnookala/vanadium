var request = require('request');

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

vanadium.prototype.connect = function () {
    try {
        request(this.host, function (err, resp, body) {
            if (err !== null) {
                console.log(err);
                process.exit(1);
            }

            try {
                var contents = JSON.parse(body);
                this._availableDebuggers = contents;
                console.log(contents);
                return contents;
            } catch (e) {
                console.log(e);
                process.exit(1);
            }
        });
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};

module.exports = vanadium;
