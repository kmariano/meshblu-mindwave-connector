# SKYNET-MINDWAVE-CONNECTOR

The Skynet Mindwave Connector is a [Node.js](http://nodejs.org/) application that allows you to connect a [Neurosky Mindwave](http://store.neurosky.com/products/mindwave-mobile) to [Meshblu - formerly Skynet.IM](http://meshblu.octoblu.com). It can connect
to both public and private Skynet instances. It uses the [ThinkGear Connector](http://developer.neurosky.com/docs/doku.php?id=thinkgear_connector_tgc) developed by NeuroSky to interface with the NeuroSky Mindwave. 

## 1. Dependencies

* ThinkGear Connector
* Node.JS
* Meshblu (Skynet.IM)

## 2. Installation
1. Install ThinkGear Connector
2. Install Node.js
3. Checkout source from github by entering the following command in a Terminal - _git checkout git@github.com:kmariano/skynet-mindwave-connector.git_
4. Copy configjs.sample and save it as config.js in the project root directory

## 3. Environment Variables

### 3.1 Mindwave Environment Variables

* _MINDWAVE_HOST_ : (Required) This is the ThinkGear Connector Host, the default is '127.0.0.1'
* _MINDWAVE_PORT_ : (Required) This is the ThinkGear Connector Port, the default is '13854'

### 3.2 Skynet Environment Variables

* _SKYNET_SERVER_ : (Required)This is the Skynet.im Host, the default is 'skynet.im'
* _SKYNET_PORT_ : (Required) This is the SKynet.im Port, the default is '80'
* _BROADCAST_UUID_ : (Optional) This is the UUID that the device will message. Default is set to '*' which is a broadcast
  to all devices. If a UUID is specified, messages from the mindwave will only be sent to the device with the specified UUID

## 4. Running the Application
To run the application Go to the Root Directory and enter the following command:

    node [ENVIRONMENT_VARIABLE=VALUE] app.js 

