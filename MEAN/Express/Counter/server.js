// require express
var express = require("express");
var session=require("express-session");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(session({secret: 'codingdojorocks'}));  // string for encryption
// root route to render the index.ejs view
app.get('/', function(req, res) {
  if("count" in req.session){
    req.session.count++;
  }
  else{
    req.session.count=1;
  }
    res.send("I have seen you "+req.session.count+" times. The more I know about you, the stronger I become.");
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
