var when = require('when');
var config = require('../config');
var skynet = require('skynet');

function connect(uuid, token){
    var defer = when.defer();

    var skynetConfig = {
        uuid: uuid,
        token: token,
        server: config.skynet.host,
        port: config.skynet.port
    };

    console.log('connecting to skynet with', skynetConfig);

    var conn = skynet.createConnection(skynetConfig);

    conn.on('notReady', function(data){
        console.log('UUID FAILED AUTHENTICATION!', data);
        // Register device
        conn.register({
            uuid: uuid,
            token: token,
            type: 'device',
            deviceType : 'mindwave'
        }, function (data) {
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
