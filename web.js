var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var index = fs.readFileSync('index.html',function (err, data) {
      if (err) throw err;
      console.log(data);
  });
  var data = index.toString();
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
