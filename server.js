var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var me = {
    name: "Landon Call",
    location: "Highland",
    hobbies: hobbies = ["Coding, Photography, Art"],
    occupation: "Coding",
    latest: "Simply Coding"
};

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.get('/api/code/user', function(req, res) {
    res.status(200).send(JSON.stringify(me));
});

app.get('/api/code/name', function(req, res) {
    res.status(200).send(JSON.stringify(me.name));
});

app.get('/api/code/location', function(req, res) {
   res.status(200).send(JSON.stringify(me.location));
});

app.put('/api/code/location', function(req, res) {
    me.location = req.body.me;
    console.log(req.body.me);
});

app.get('/api/code/hobbies', function(req, res) {
    res.status(200).send(JSON.stringify(hobbies.reverse()));
});

app.get('/api/code/hobbies/:order', function(req, res, order) {
    if (order === "desc") {
        hobbies.sort();
    }

    else if (order === "desc") {
        hobbies.reverse();
    }
});

app.get('/api/code/occupation', function(req, res) {
    res.status(200).send(JSON.stringify(me.occupation));
});

app.get('/api/code/occupation/latest', function(req, res) {
    res.status(200).send(JSON.stringify(me.latest));
});





app.listen(3000);