'use strict'

var express = require('express');
var router = express.Router();

var Minion = require('../models/minion');


router.get('/', (req, res) => {
  Minion.find({}, (err, data) => {
    if(err) {
      return res.status(499).send(err)
    }
    res.send(data);
  })
})



router.post('/', (req, res) => {
  Minion.create(req.body, (err, newMinion) =>{
    if(err) {
      return res.status(499).send(err)
    }
    res.send(newMinion);
  })
});


router.put('/', (req, res) => {
  Minion.findByIdAndUpdate(req.body._id, req.body, (err, minion) => {
    if(err) {
      return res.status(499).send(err)
    }
    res.end();
  })
})

router.delete('/:id', (req, res) => {
  Minion.findByIdAndRemove(req.params.id, (err) => {
    if(err) {
      return res.status(499).send(err)
    }
    res.end();
  })
})



module.exports = router;