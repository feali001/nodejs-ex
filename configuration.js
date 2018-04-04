var config = {
    connection: {
        user: 'guest', pass:'guest',server:'172.30.127.158', port: 5672, vhost: 'username'
    },
     queues: [ { name: 'cloudamqp-queue', subscribe: true, durable: true } ],
      exchanges: [ { name: "exchange",type: "direct", persistent: true, durable: true } ],
      bindings: [ { exchange: 'exchange', target: 'cloudamqp-queue', keys: ["routingKey"] } ]
};

exports.config = config;
