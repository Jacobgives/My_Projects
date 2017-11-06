var express = require("express");
var app = express();
var session = require('express-session');
var app = express();
app.use(session({secret: 'codingdojorocks'}));  // string for encryption

app.get('/', function(request, response) {
  req.session.count = req.session.count++;
  response.send(request.session.count);
})
app.listen(8000, function() {
  console.log("listening on port 8000");
})
