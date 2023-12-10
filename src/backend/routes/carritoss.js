var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Carrito = require('../models/Carrito.js');
var Producto = require('../models/Producto.js');

// GET de todos los Carritos
router.get('/:id', function (req, res, next) {
  Carrito.find().exec(function (err, Carritoinfo) {
    if (err) res.status(500).send(err);
    else res.status(200).json(Carritoinfo);
  });
});


// POST del carrito

router.post('/agregar-al-carrito', async (req, res) => {
  try {
    const usuarioId = req.body.usuarioId;
    const productoId = req.body.productoId;

    let carrito = await Carrito.findOne({ UsuarioID: usuarioId }).populate('Productos');
    if (!carrito) {
      carrito = new Carrito({ UsuarioID: usuarioId, Productos: [], precio: 0 });
      await carrito.save();
    }

    const nuevoProducto = await Producto.findById(productoId);
    if (!nuevoProducto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    carrito.Productos.push(nuevoProducto);

    carrito.precio = carrito.Productos.reduce((total, producto) => total + producto.precio, 0);

    await carrito.save();

    res.status(200).json({ mensaje: 'Producto agregado al carrito con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al agregar el producto al carrito' });
  }
});

// GET para obtener el carrito de un usuario en especifico

router.get('/:usuarioId', async (req, res) => {
  const usuarioId = req.params.usuarioId;

  try {
    const carrito = await Carrito.findOne({ UsuarioID: usuarioId }).populate('Productos');
    if (!carrito) {
      return res.status(404).json({ mensaje: 'Carrito no encontrado para el usuario proporcionado.' });
    }

    res.status(200).json(carrito.Productos);
  } catch (error) {
    console.error('Error al obtener productos del carrito:', error);
    res.status(500).json({ mensaje: 'Error al obtener productos del carrito.' });
  }
});

module.exports = router;