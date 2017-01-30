var express = require('express');
var app = express();

app.get('/api/greeting/:name', function(req, res){
  var name = req.params.name;
  res.send("Happy Monday " + name);
});

app.get('/api/number', function(req, res){
  res.send("32");
});

app.get('/api/numbers', function(req, res){
  res.send("32, 14, 76, 5");
});







app.listen(3000, function(){
  console.log('Express server up and running on port 3000');
});
