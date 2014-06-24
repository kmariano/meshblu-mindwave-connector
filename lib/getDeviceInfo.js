var db = require('./connectordb');
var uuid = require('node-uuid');
var crypto = require('crypto');

function getDeviceInfo() {
    return db.findOne({name: 'skynet-mindwave-connector'})
        .then(function (deviceInfo) {
            if (deviceInfo) {
                console.log('found device info');
                return deviceInfo;
            }
            var deviceInfo = {
                name: "skynet-mindwave-connector",
                type: "device",
                deviceType: "mindwave",
                uuid: uuid.v1(),
                token: crypto.createHash('sha1').update((new Date()).valueOf().toString() + Math.random().toString()).digest('hex')
            };

            console.log('storing device info', deviceInfo);
            return db.insert(deviceInfo)
                .then(function () {
                    return db.findOne({name: 'skynet-mindwave-connector'});
                });

        });
}

module.exports = {
    getDeviceInfo : getDeviceInfo
};