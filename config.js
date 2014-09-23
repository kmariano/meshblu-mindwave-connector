module.exports = {
    mindwave: {
        host: process.env.MINDWAVE_HOST || '127.0.0.1',
        port: process.env.MINDWAVE_PORT || '13854'
    },
    skynet: {
        host: process.env.SKYNET_SERVER || 'localhost',
        port: process.env.SKYNET_PORT || '3000'
    },
    app: {
        name: 'skynet-mindwave-connector',
        key: '824620562b95c8f5c015898fa6aa4c264bfdd40e'
    }
};
