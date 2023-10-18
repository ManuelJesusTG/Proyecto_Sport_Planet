const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  nombre:  String,
  correo: String,
  contrasenia: String,
  direccion: String,
  numero: String
});

// Crear el modelo
const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;