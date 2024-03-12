const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');


router.get('/ruta1', (req, res) => {
  res.sendFile(path.join(__dirname, '../lab1-2-3.html'));
});

router.get('/ruta2', (req, res) => {
  res.sendFile(path.join(__dirname, '../lab4.html'));
});

router.get('/ruta3', (req, res) => {
  res.redirect('https://youtu.be/xvFZjo5PgG0?si=7O2oqwoGm6D9gAXM');
});

router.get('/ruta6', (req, res) => {
  res.render('crear', {});
});

router.post('/guardarDatos', (req, res) => {
  const { dueño, nombreMascota, edadMascota, fotoMascota } = req.body;

  // Guardar los datos en un archivo de texto
  const datosGuardados = `Dueño: ${dueño}, Nombre: ${nombreMascota}, Edad: ${edadMascota}, Foto: ${fotoMascota}\n`;
  fs.appendFile('Registro_mascotas.txt', datosGuardados, () => {
    console.log('Datos guardados correctamente');
    res.render('mascotas', { 
      titulo: 'Datos guardados correctamente',
      contenido: { dueño, nombreMascota, edadMascota, fotoMascota }
    });
  });
});

module.exports = router;