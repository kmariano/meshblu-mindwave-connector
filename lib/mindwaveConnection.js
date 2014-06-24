var net = require('net');
var when = require('when');
var config= require('../config');


function connect(){
    var defer = when.defer();
    var client = net.createConnection({
        port : config.mindwave.port ,
        host : config.mindwave.host
    }, function(){
        console.log(arguments);
        client.write(JSON.stringify({
            appName : config.app.name,
            appKey : config.app.key,
            format : 'json'
        }));
        defer.resolve(client);
    });
    return defer.promise;
};

module.exports = {
    connect : connect
};



