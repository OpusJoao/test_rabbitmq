var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection){
    if(error0){
        throw error0;
    }

    connection.createChannel(function(error1,channel){
        if(error1){
            throw error1;
        }

        let queue     = 'hello';
        let message   = 'Hello world';

        channel.assertQueue(queue,{
            durable:false
        });

        let quantitySends = 1000000;
        let index         = 0;
        for(index = 0; index < quantitySends; index++){
            message = {
                msg: `Hello world: ${Math.round(Math.random()*99999)+1}`
            }
            channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
            console.log(` [x] Sent ${message}`);
        }

    });

    setTimeout(function() {
        connection.close();
        process.exit(0)
    }, 2000);
});
