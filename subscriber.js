var rabbitt = require("wascally");
var configuration = require( './configuration.js' )

rabbit.configure(configuration.config)
    .then(handleMessage)

function handleMessage(){
    setting up the handler for the subscriber
    var handler = rabbit.handle("test.message", function( msg ) {
        try {
            console.log(msg.body);
            msg.ack();
        }
        catch( err ) {
            message.nack();
        }
    });
    console.log("waiting for message from publisher");
}
