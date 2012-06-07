var request = require('request');
var page = require('./lib/page');

var vanadium = function () {
    console.log('initing vanadium...');
};

vanadium.prototype.test = function () {
    console.log('testing vanadium');
};

module.exports = vanadium;
