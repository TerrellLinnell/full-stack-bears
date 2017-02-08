var express = require('express');
var Bear = require('../models/bear');
var moment = require('moment');


var router = new express.Router();

router.use(function(req, res, next) {
  console.log("Running the Express router.");
  next();
})

router.route('/bear')
  .get(function(req, res){
    Bear.find(function(err, data) {
      if(err){
        console.log("Error finding all bearers");
      }
      else{
        res.json(data);
      }
    });
  })
.post(function(req, res){
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
      console.log(err, "Error with your bearer");
    }
    else{
      res.json(bearData);
    }
  });
});

router.route('/bears/:bear_id')
  .get (function(req, res){
    Bear.findById(req.params.bear_id, function(err, bearData){
      if(err){
        console.log("Error finding one specific bear");
      }
      else{
        res.json(bearData);
      }
    });
  })

  .put(function(req, res){
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
        });
      }
    });
  })

  .delete(function(req, res) {
    Bear.remove({ _id: req.params.bear_id}, function(err, b){
      if (err) {
        console.log(err, "COULD NOT DELETE BEAR!!!");
      }
      else{
        res.json({ message: "BEAR DELETED 😫"})
      }
    });
  });


module.exports = router;
