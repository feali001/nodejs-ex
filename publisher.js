//publisher.js
var rabbit = require("wascally");
var configuration = require( './configuration.js' );

rabbit.configure(configuration.config)
    .then(publishMessage)


function publishMessage(){
    var message = "Hello CloudAMQP";
    var p = rabbit.publish("exchange", {
        type: "test.message",
        body: message,
        routingKey: "routingKey"
    });
}
