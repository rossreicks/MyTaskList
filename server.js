var express = require("express");
var server = express();

var port = 3000;

server.get('/', function (req, res) {
  res.send('Hello World!')
})

server.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
})
