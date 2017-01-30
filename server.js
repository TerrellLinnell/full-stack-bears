var express = require('express');
var app = express();
var Bear = require('./models/bear');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/fullstack-bears");

app.get('/api/bears', function(req, res){
  res.send({ message:"You found the bears route!! 😁😁😁😁😁😁"});
});




app.listen(3000, function(){
  console.log('Express server up and running on port 3000');
});
