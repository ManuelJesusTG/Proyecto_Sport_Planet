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

// POST de ticket

router.post('/', function(req, res, next) {
  const { usuarioID, datosPago, metodoPago, precio, Productos } = req.body;

  console.log('Datos recibidos en el servidor:', usuarioID, datosPago, metodoPago, precio, Productos);

  let ticket = new Ticket({
    UsuarioID: usuarioID,
    DatosPago: datosPago,
    MetodoPago: metodoPago,
    precio: precio,
    Productos: Productos
  });

  ticket.save((err, ticketDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      ticket: ticketDB
    });
  });
});

module.exports = router;
