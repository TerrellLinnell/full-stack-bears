var express = require('express');
var app = express();
var Bear = require('./models/bear');
var bodyParser = require('body-parser');
var moment = require('moment');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/fullstack-bears");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  var date = moment();
  res.render('index', {name: "Stranger", date: date.format("MMM Do YYYY"),
                       time: date.format("hh:mm:ss A")});
});

app.get('/bears', function(req, res) {
  Bear.find(function(err, data) {
    if(err){
      console.log("Error finding all bearers");
    }
    else{
      res.render('bears', {bears: data});
    }
  })
});

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
});

app.put('/api/bears/:bear_id', function(req, res){
  Bear.findById(req.params.bear_id, function(err, bearData){
    if(err){
      console.log("Error finding one specific bear");
    }
    else{
      bearData.name = req.body.name ? req.body.name :bearData.name;
      bearData.species = req.body.species ? req.body.species :bearData.species;
      bearData.age = req.body.age ? req.body.age :bearData.age;
      bearData.weight = req.body.weight ? req.body.weight :bearData.weight;
      bearData.location = req.body.location ? req.body.location :bearData.location;
      bearData.attitude = req.body.attitude ? req.body.attitude :bearData.attitude;

      bearData.save(function(e, updatedBear){
        if (e) {
          console.log("Error with Bearer");
        }
        else{
          res.json(updatedBear);
        }
      })
    }
  })
});

app.delete('/api/bears/:bear_id', function(req, res) {
  Bear.remove({ _id: req.params.bear_id}, function(err, b){
    if (err) {
      console.log(err, "COULD NOT DELETE BEAR!!!");
    }
    else{
      res.json({ message: "BEAR DELETED 😫"})
    }
  })
});

app.listen(3000, function(){
  console.log('Express server up and running on port 3000');
});
