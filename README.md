# test_rabbitmq
Testing RabbitMQ

# Requirements
1. [Docker](https://www.docker.com/get-started)
2. [node/npm](https://nodejs.org/pt-br/download/)

# Setup

```sh
git clone https://github.com/OpusJoao/test_rabbitmq.git
cd test_rabbitmq
npm install
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management
```

Acess on your browser:

http://localhost:15672

> username and password: guest

# Run 

```sh
# In your terminal
node send.js

#in your another terminal
node receive.js
```


# References
* https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html

