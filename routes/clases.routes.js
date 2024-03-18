const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const equipoController = require('../controllers/equipo.controller');

router.get('/crear', isAuth, equipoController.get_crear);
router.post('/crear', isAuth, equipoController.post_crear);
router.get('/:jugador_id', isAuth, equipoController.get_root);
router.get('/', isAuth, equipoController.get_root);

module.exports = router;
