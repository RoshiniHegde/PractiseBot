'use strict';

const Restify = require("restify");

const server = Restify.createServer({
    name: "CafeBot2"
});

server.use(Restify.bodyParser());
server.use(Restify.jsonp());
const port_num = 8080; // to be decided

server.post('/',(req, res, next) => {
    let {
        status,
        result
    }=req.body;

    if (status === 200) {
        console.log("Recieved Status 200");
    }

    console.log(result);
    return next;
});

server.listen((process.env.PORT || port_num, function() {
    console.log("Server up and running");
}));
