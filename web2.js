var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var buffer = new Buffer("test","utf8");
    
  response.send(buffer.write(fs.readFileSync("index.html"),"utf8"))
});

var port = process.env.PORT || 9321;
app.listen(port, function() {
console.log("Listening on " + port);
});

