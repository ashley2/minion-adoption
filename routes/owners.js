'use strict'

var express = require('express');
var router = express.Router();

var Owner = require('../models/owner');


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

router.delete('/:id', (req, res) => {
  Owner.findByIdAndRemove(req.params.id, (err) => {
    if(err) {
      return res.status(499).send(err)
    }
    res.end();
  })
})



module.exports = router;