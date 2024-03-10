const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/ruta3', (req, res) => {
  res.redirect('https://youtu.be/xvFZjo5PgG0?si=7O2oqwoGm6D9gAXM');
});

router.get('/ruta5', (req, res) => {
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
