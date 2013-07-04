var express = require('express');
var buffer = new buffer('index.html');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.writeFile(buffer, funtion(err){
    if(err) throw err;
      console.log("It's saved!");
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
