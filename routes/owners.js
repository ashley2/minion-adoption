'use strict'

var express = require('express');
var router = express.Router();

var Owner = require('../models/owner');
var Minion = require('../models/minion');



router.get('/', (req, res) => {
  Owner.find({}, (err, data) => {
    if(err) {
      return res.status(499).send(err)
    }
    res.send(data);
  })
})

router.get('/minions/available', (req, res) => {
  Minion.find({isAdopted:false}, (err, data) => {
    if(err) {
      return res.status(499).send(err)
    }
    res.send(data)
  })
})

router.get('/', (req, res) => {
 Owner.find({}).populate('minions').exec((err, data) => {
   if(err) {
     return res.status(499).send(err)
   }
   res.send(data);
 })
})
the generic get function


router.post('/', (req, res) => {
  Owner.create(req.body, (err, newOwner) =>{
    if(err) {
      return res.status(499).send(err)
    }
    res.send(newOwner);
  })
});


router.put('/', (req, res) => {
  Owner.findByIdAndUpdate(req.body._id, req.body, (err, owner) => {
    if(err) {
      return res.status(499).send(err)
    }
    res.end();
  })
})


router.put('/:ownerId/addMinion/:minionId', function(req, res){
  Owner.findById(req.params.ownerId, function(err, owner){

    if(err ||  !owner) return res.status(400).send(err || "Owner not found.");

    Minion.findById(req.params.minionId, function(err, minion){

     if(err ||  !minion) return res.status(499).send(err || "Minion not found.");
     owner.minions.push(req.params.minionid)

     minion.isAdopted = true;
     minion.save(function(err, savedMinion){
       owner.save(function(err, savedOwner){
       })
       res.status(err ? 499 : 200).send(err || savedMinion);
     })
   });
  })
})

router.delete('/:id', (req, res) => {
  Owner.findByIdAndRemove(req.params.id, (err) => {
    if(err) {
      return res.status(499).send(err)
    }
    res.end();
  })
})



module.exports = router;