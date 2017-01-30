var express = require('express');
var app = express();
var Bear = require('./models/bear');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/fullstack-bears");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/bears', function(req, res){
  Bear.find(function(err, data) {
    if(err){
      console.log("Error finding all bearers");
    }
    else{
      res.json(data);
    }
  })
});

app.post('/api/bears', function(req, res){
  var bear = new Bear({
    age:req.body.age,
    species:req.body.species,
    name:req.body.name,
    weight:req.body.weight,
    location:req.body.location,
    attitude:req.body.attitude

  });

  bear.save(function(err, bearData) {
    if (err) {
      consoel.log(err, "Error with your bearer");
    }
    else{
      res.json(bearData);
    }
  });
})

app.get('/api/bears/:bear_id', function(req, res){
  Bear.findById(req.params.bear_id, function(err, bearData){
    if(err){
      console.log("Error finding one specific bear");
    }
    else{
      res.json(bearData);
    }
  })
})


app.listen(3000, function(){
  console.log('Express server up and running on port 3000');
});
