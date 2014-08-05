var skynet = require('./lib/skynetConnection');
var mindwave = require('./lib/mindwaveConnection');
var deviceInfo = require('./lib/getDeviceInfo');


var skynetConn, mindwaveConn, device;
deviceInfo.getDeviceInfo().then(function (deviceInfo) {
    device = deviceInfo;
    return skynet.connect(deviceInfo)
}).then(function (conn) {
    skynetConn = conn;
    return mindwave.connect();
}).then(function (mConn) {
    console.log(mConn);
    mindwaveConn = mConn;
    console.log('connected to mindwave');
    var jsonDataBuffer = '';
    mindwaveConn.on('data', function (result) {
        console.log(result.toString());
        var jsonData;
        try {
            jsonData = JSON.parse(result.toString());
            console.log(JSON.stringify(jsonData, null, 2));
            if(jsonData.blinkStrength || jsonData.eSense ){
                console.log('sending skynet message');
                var data = {
                    devices : process.env.BROADCAST_UUID || '*',
                    payload : jsonData
                };
                skynetConn.message(data);
                console.log('Message sent to skynet ');
                console.log(data);
            }
        } catch (e) {
            console.log(e);
        }
    });

    mindwaveConn.on('end', function () {
        console.log('mindwave client disconnected');
    });
});




