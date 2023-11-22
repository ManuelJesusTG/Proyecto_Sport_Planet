var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

var mongoose = require('mongoose');
var Usuario = require('../models/Usuario.js');
var db = mongoose.connection;


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

router.post('/login', function(req,res, next) {

    let body = req.body;

    Usuario.findOne({ correo: body.correo }, (erro, usuarioDB)=>{
        if (erro) {
          return res.status(500).json({
             ok: false,
             err: erro
          })
       }
   // Verifica que exista un usuario con el mail escrita por el usuario.
      if (!usuarioDB) {
         return res.status(400).json({
           ok: false,
           err: {
               message: "Usuario o contraseña incorrectos"
           }
        })
      }
   // Valida que la contraseña escrita por el usuario, sea la almacenada en la db
      if (! bcrypt.compareSync(body.contrasenia, usuarioDB.contrasenia)){
         
         console.log("Acceso no autorizado")
         return res.status(400).json({
            ok: false,
            err: {
              message: "Usuario o contraseña incorrectos"
            }
         });
      }

      res.send("Acceso autorizado")
      console.log("Acceso autorizado")
   })

})

module.exports = router;
