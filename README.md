# SKYNET-MINDWAVE-CONNECTOR

The Skynet Mindwave Connector is a [Node.js](http://nodejs.org/) application that allows you to connect a [Neurosky Mindwave](http://store.neurosky.com/products/mindwave-mobile) to [Skynet.Im](http://skynet.im). It can connect
to both public and private Skynet instances. It uses the [ThinkGear Connector](http://developer.neurosky.com/docs/doku.php?id=thinkgear_connector_tgc) developed by NeuroSky to interface with the NeuroSky Mindwave. 

## 1. Dependencies

* ThinkGear Connector
* Node.JS
* Skynet.Im

## 2. Installation
1. Install ThinkGear Connector
2. Install Node.js
3. Checkout source from github
    
    git checkout git@github.com:kmariano/skynet-mindwave-connector.git

## 3. Environment Variables
### 3.1 Mindwave Environment Variables
* _MINDWAVE_HOST_ : This is the ThinkGear Connector Host, the default is '127.0.0.1'
* _MINDWAVE_PORT_ : This is the ThinkGear Connector Portt, the default is '13854'
### 3.2 Skynet Environment Variables
* _SKYNET_HOST_ : This is the ThinkGear Connector Host, the default is 'skynet.im'
* _SKYNET_PORT_ : This is the ThinkGear Connector Portt, the default is '80'


## 4. Running the Application
To run the application Go to the Root Directory and enter the following command:

    node [ENVIRONMENT_VARIABLE=VALUE] app.js 

