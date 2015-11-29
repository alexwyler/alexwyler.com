var express = require('express');

var app = express();

console.log(__dirname + '/static/html/index.html');
app.use('/static', express.static(__dirname + '/static'));
app.all("/*", function(req, res) {
    res.sendfile(__dirname + '/static/html/index.html');
});

var port = process.env.PORT || 80;
console.log('Attempting to listen on port ' +  port + '...');
app.listen(port);