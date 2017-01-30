var express = require('express');
var app = express();

app.get('/api/greeting',function(req,res){
  res.send("Happy Monday");
});

app.listen(3000, function(){
  console.log('Express server up and running on port 3000');
});
