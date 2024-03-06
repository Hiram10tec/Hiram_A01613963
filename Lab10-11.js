const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const lab11modulo1 = require('./routes/lab11modulo1');
const lab11modulo2 = require('./routes/lab11modulo2');
const app = express();
app.use(express.static(path.join(__dirname)));

app.use(express.static('IMG'));
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/', lab11modulo1);
app.use('/', lab11modulo2);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/lab5-10.html');
});

app.use('/ruta4', (req, res) => {
  res.status(404).send('Error 404: Página no encontrada :(');
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});













