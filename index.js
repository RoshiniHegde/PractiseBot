'use strict';

const express = require("express");

var app = express();

app.get('/',function(req, res){
    console.log("Get function is hit");
    res.send("Helleo");
})

// // 
// const server = express.({
//     name: "CafeBot2"
// });


 app.use(express.bodyParser());
 app.use(express.jsonp());
// //const port_num = 8080; // to be decided

app.post('/practise',(req, res, next) => {
    console.log("Init ..........");
    let {
        status,
        result
    }=req.body;

    if (status === 200) {
        console.log("Recieved Status 200");
    }

    let responseText = "Here is the result";
    res.json({
        speech: responseText,
        displayText:responseText,
        source:"practise-webhook"
    }) ;

    

    console.log(result);
    return next;
});

app.listen(3004, function() {
    console.log("Server up and running 3004");
});

