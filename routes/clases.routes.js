const express = require('express');

const router = express.Router();

const equipoController = require('../controllers/equipo.controller');

router.get('/crear', equipoController.get_crear);
router.post('/crear', equipoController.post_crear);
router.get('/', equipoController.get_root);

module.exports = router;
