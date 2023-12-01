var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

var mongoose = require('mongoose');
var Usuario = require('../models/Usuario.js');
var db = mongoose.connection;

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


router.get('/', function(req, res, next) {
    res.send("usuario")
  });

  // GET de todos los usuarios

  router.get('/a', function(req,res,next){
    Usuario.find().exec(function(err,usuarioinfo) {
        if (err) res.status(500).send(err);
        else res.status(200).json(usuarioinfo);
    })
})

// Post de los usuarios (Registro)

router.post('/register', function(req, res, next) {

    const { nombre, correo, contrasenia, direccion, numero } = req.body;

    console.log(nombre, correo, contrasenia, direccion, numero);

    let usuario = new Usuario({
        nombre,
        correo,
        contrasenia: bcrypt.hashSync(contrasenia, 10),
        direccion,
        numero
      });

      usuario.save((err, usuarioDB) => {
        if (err) {
          return res.status(400).json({
             ok: false,
             err,
          });
        }
        res.json({
              ok: true,
              usuario: usuarioDB
           });
        })
    });

// Apartado de login / autentificación


router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: 'Error de autenticación' });
    }
    if (!user) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // Si llegas aquí, la autenticación fue exitosa y el user esta logueado :D
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error de autenticación' });
      }
      return res.status(200).json({ message: 'Autenticación exitosa' });
    });
  })(req, res, next);
});

module.exports = router;
