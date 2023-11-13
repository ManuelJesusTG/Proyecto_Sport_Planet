var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Carrito = require('../models/Carrito.js');
var db = mongoose.connection;

// GET de todos los Carritos

router.get('/', function(req, res, next) {
    res.send("Carrito")
  });

  router.get('/a', function(req,res,next){
    Carrito.find().exec(function(err,Carritoinfo) {
        if (err) res.status(500).send(err);
        else res.status(200).json(Carritoinfo);
    })
})

module.exports = router;
