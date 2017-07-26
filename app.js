var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('external'));
app.use(express.static('styles'));
app.use(express.static('js'));
app.use(express.static(path.join(__dirname)));
app.use(express.static('directed-graph'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/home', function(req, res) {
    res.sendFile(__dirname + '/home.html');
});

app.get('/magic', function(req, res) {
    app.use(express.static('/magic'));
    res.sendFile(__dirname + '/magic/topic.html');
});

app.get('/asciiart', function(req, res) {
    app.use(express.static('/asciiart'));
    res.sendFile(__dirname + '/asciiart/topic.html');
});

// app.get('/images/represent/asciiart', function(req, res) {
//     app.use(express.static('linear-life/asciiart'));
//     res.sendFile(__dirname + '/linear-life/asciiart/topic.html');
// });


app.listen(8080);
