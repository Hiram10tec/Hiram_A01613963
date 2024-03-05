const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;
app.use(express.static('IMG'));
app.use(express.static(path.join(__dirname)));

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/lab5-10-11.html');
});

app.get('/ruta1', (req, res) => {
    res.sendFile(__dirname + '/lab1-2-3.html');
  });
  
app.get('/ruta2', (req, res) => {
    res.sendFile(__dirname + '/lab4.html');
  });

app.get('/ruta3', (req, res) => {
    res.redirect('https://youtu.be/xvFZjo5PgG0?si=7O2oqwoGm6D9gAXM');
  });

app.get('/ruta4', (req, res) => {
    res.status(404).send('Error 404: Página no encontrada');
});
  

app.post('/guardarDatos', (req, res) => {
    const { dueño, nombreMascota, edadMascota, fotoMascota } = req.body;
  
    // Guardar los datos en un archivo de texto
    const datosGuardados = `Dueño: ${dueño}, Nombre: ${nombreMascota}, Edad: ${edadMascota}, Foto: ${fotoMascota}\n`;
    fs.appendFile('Registro_mascotas.txt', datosGuardados, (err) => {
      if (err) throw err;
      console.log('Datos guardados correctamente');
    });
  
    const tablaHTML = `
      <table border="1">
        <tr>
            <th>Dueño</th>
            <th>Nombre de tu mascota</th>
            <th>Edad de tu mascota</th>
            <th>Foto de tu mascota</th>
        </tr>
        <tr>
            <td>${dueño}</td>
            <td>${nombreMascota}</td>
            <td>${edadMascota}</td>
            <td><img src="${fotoMascota}" alt="${nombreMascota}" style="width:100px;height:100px;"></td>
        </tr>
      </table>
    `;
  
    res.send(`<h2>Datos guardados correctamente</h2>${tablaHTML}`);
  });
  


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
