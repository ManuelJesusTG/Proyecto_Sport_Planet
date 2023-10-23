var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Producto = require('../models/Producto.js');
var db = mongoose.connection;

// GET de todos los Productos

router.get('/', function(req, res, next) {
    res.send("Productos")
  });

  router.get('/a', function(req,res,next){
    Producto.find().exec(function(err,jugadorinfo) {
        if (err) res.status(500).send(err);
        else res.status(200).json(jugadorinfo);
    })
})

module.exports = router;
