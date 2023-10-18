const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI).then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.get('/backend', (req, res) => {
  res.json({ message: 'Datos desde el backend' });
});

console.log(process.env.port)

app.listen(process.env.port, () => {
  console.log(`Servidor Express en el puerto ${process.env.port}`);
});