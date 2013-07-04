var express = require('express');
var fs = require('fs');

var out = fs.readFile('index.html');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(out);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
