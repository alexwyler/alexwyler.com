var express = require('express');
var path    = require('path');

var app = express();

console.log(__dirname + '/static/html/index.html');
app.use('/static', express.static(__dirname + '/static'));
app.all("/*", function(req, res, next) {
    res.sendfile(__dirname + '/static/html/index.html');
});

app.listen(process.env.PORT || 80);