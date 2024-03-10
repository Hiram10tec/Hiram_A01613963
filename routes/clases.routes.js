const express = require('express');
const app = express();
const router = express.Router();

const mascotasController = require('./controllers/mascotasController.js');
const clasesRoutes = require('./routes/clases.routes.js');

router.get('/ruta3', mascotasController.redirectToYouTube);
router.get('/ruta5', mascotasController.renderCrear);
router.post('/guardarDatos', mascotasController.guardarDatos);
router.get('/mascotas', mascotasController.renderMascotas);


app.use('/', router);

const puerto = 3000;
app.listen(puerto, () => {
  console.log(`La aplicación está escuchando en el puerto ${puerto}`);
});
