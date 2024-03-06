const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/ruta3', (req, res) => {
  res.redirect('https://youtu.be/xvFZjo5PgG0?si=7O2oqwoGm6D9gAXM');
});

router.post('/guardarDatos', (req, res) => {
  const { dueño, nombreMascota, edadMascota, fotoMascota } = req.body;

  // Guardar los datos en un archivo de texto
  const datosGuardados = `Dueño: ${dueño}, Nombre: ${nombreMascota}, Edad: ${edadMascota}, Foto: ${fotoMascota}\n`;
  fs.appendFile('Registro_mascotas.txt', datosGuardados, () => {
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


module.exports = router;