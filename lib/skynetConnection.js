var when = require('when');
var config = require('../config');
var skynet = require('skynet');
var _ = require('lodash');

function connect(deviceInfo){
    var defer = when.defer();

    var skynetConfig = _.clone(deviceInfo);
    skynetConfig.server = config.skynet.host;
    skynetConfig.port = config.skynet.port;

    console.log('connecting to skynet with', skynetConfig);

    var conn = skynet.createConnection(skynetConfig);

    conn.on('notReady', function(data){
        console.log('UUID FAILED AUTHENTICATION!', data);


        // Register device
        conn.register(deviceInfo, function (data) {
            console.log('registered', data);
        });
    });

    conn.on('ready', function(data){
        defer.resolve(conn);
        console.log('UUID AUTHENTICATED!', data);
    });

    // Event triggered when device loses connection to skynet
    conn.on('disconnect', function(data){
        console.log('disconnected from skynet');
    });

    return defer.promise;
}

module.exports = {
    connect : connect
};
