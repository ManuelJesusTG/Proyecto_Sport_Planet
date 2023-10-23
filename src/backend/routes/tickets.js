var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Ticket = require('../models/Ticket.js');
var db = mongoose.connection;

// GET de todos los Tickets

router.get('/', function(req, res, next) {
    res.send("Tickets")
  });

  router.get('/a', function(req,res,next){
    Ticket.find().exec(function(err,ticketinfo) {
        if (err) res.status(500).send(err);
        else res.status(200).json(ticketinfo);
    })
})

module.exports = router;
