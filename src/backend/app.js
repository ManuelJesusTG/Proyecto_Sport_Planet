const express = require('express');
const app = express();
app.use(express.json());
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const cors = require('cors');

app.use(cors());

var usuariosRouter = require('./routes/usuarios');
var productosRouter = require('./routes/productos');
var carritosRouter = require('./routes/carritoss.js');
var ticketsRouter = require('./routes/tickets');

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DB_URI).then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));


app.use('/usuarios', usuariosRouter);
app.use('/productos', productosRouter);
app.use('/carritos', carritosRouter)
app.use('/tickets', ticketsRouter)

app.get('/backend', (req, res) => {
  res.json({ message: 'Datos desde el backend' });
});

console.log(process.env.port)


app.listen(process.env.port, () => {
  console.log(`Servidor Express en el puerto ${process.env.port}`);
});