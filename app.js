var skynet = require('./lib/skynetConnection');
var mindwave = require('./lib/mindwaveConnection');
var deviceInfo = require('./lib/getDeviceInfo');


var skynetConn, mindwaveConn, device;
deviceInfo.getDeviceInfo().then(function (deviceInfo) {
    device = deviceInfo;
    return skynet.connect(deviceInfo.uuid, deviceInfo.token)
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
        jsonDataBuffer += result.toString();
        var jsonData;
        try {
            jsonData = JSON.parse(jsonDataBuffer);
            jsonDataBuffer = '';
            console.log(JSON.stringify(jsonData, null, 2));
        } catch (e) {
            console.log(e);
        }
        console.log(result.toString());

    });

    mindwaveConn.on('end', function () {
        console.log('mindwave client disconnected');
    });
});




